param(
  [string]$RawVideo,
  [string]$VoiceFile,
  [string]$MusicFile
)

$ErrorActionPreference = "Stop"

$ProjectRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$OutputFile = Join-Path $ProjectRoot "output\nursing-home-harmony-15s-final.mp4"
$AssFile = Join-Path $ProjectRoot "subtitles\nursing-home-harmony.ass"
$TempDir = Join-Path $ProjectRoot "preview\render-temp"
New-Item -ItemType Directory -Path $TempDir -Force | Out-Null

function Find-Tool($name) {
  $cmd = Get-Command $name -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }

  $wingetPackages = Join-Path $env:LOCALAPPDATA "Microsoft\WinGet\Packages"
  if (Test-Path $wingetPackages) {
    $found = Get-ChildItem -Path $wingetPackages -Recurse -Filter "$name.exe" -ErrorAction SilentlyContinue |
      Where-Object { $_.FullName -match "ffmpeg" } |
      Select-Object -First 1
    if ($found) { return $found.FullName }
  }

  throw "Cannot find $name. Install FFmpeg and restart PowerShell, or add FFmpeg bin to PATH."
}

function Escape-FilterPath([string]$path) {
  $p = $path.Replace("\", "/")
  return $p.Replace(":", "\:")
}

$ffmpeg = Find-Tool "ffmpeg"
$ffprobe = Find-Tool "ffprobe"

if (-not $RawVideo) {
  $rawDir = Join-Path $ProjectRoot "assets\raw-video"
  $RawVideo = Get-ChildItem -Path $rawDir -File -Include *.mp4,*.mov -Recurse |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1 -ExpandProperty FullName
}
if (-not $RawVideo -or -not (Test-Path $RawVideo)) {
  throw "No source video found. Put the Seedance MP4 in assets\raw-video\."
}

if (-not $VoiceFile) {
  $voiceDir = Join-Path $ProjectRoot "assets\voice"
  $voices = Get-ChildItem -Path $voiceDir -File -Include *.wav,*.mp3,*.m4a -Recurse
  $VoiceFile = ($voices | Where-Object { $_.Name -notmatch "preview" } | Select-Object -First 1 -ExpandProperty FullName)
  if (-not $VoiceFile) {
    $VoiceFile = ($voices | Where-Object { $_.Name -match "preview" } | Select-Object -First 1 -ExpandProperty FullName)
  }
}

if (-not $MusicFile) {
  $musicDir = Join-Path $ProjectRoot "assets\music"
  $music = Get-ChildItem -Path $musicDir -File -Include *.wav,*.mp3,*.m4a -Recurse
  $MusicFile = ($music | Where-Object { $_.Name -notmatch "preview" } | Select-Object -First 1 -ExpandProperty FullName)
  if (-not $MusicFile) {
    $MusicFile = ($music | Where-Object { $_.Name -match "preview" } | Select-Object -First 1 -ExpandProperty FullName)
  }
}

$videoJson = & $ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate -show_entries format=duration -of json $RawVideo | ConvertFrom-Json
$sourceDuration = [double]$videoJson.format.duration
$sourceWidth = $videoJson.streams[0].width
$sourceHeight = $videoJson.streams[0].height
$fpsRaw = $videoJson.streams[0].r_frame_rate

$padDuration = [Math]::Max(0, 15.0 - $sourceDuration)
$assEsc = Escape-FilterPath (Resolve-Path $AssFile)
$fontsEsc = Escape-FilterPath "C:\Windows\Fonts"
$vf = "[0:v]trim=0:15,setpts=PTS-STARTPTS,scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,setsar=1,fps=30"
if ($padDuration -gt 0.05) {
  $vf += ",tpad=stop_mode=clone:stop_duration=$($padDuration.ToString("0.###",[Globalization.CultureInfo]::InvariantCulture))"
}
$vf += ",subtitles='$assEsc':fontsdir='$fontsEsc',format=yuv420p[vout]"

$args = @("-y", "-i", $RawVideo)
$filterParts = @($vf)
$audioMap = $null

if ($VoiceFile -and (Test-Path $VoiceFile)) {
  $args += @("-i", $VoiceFile)
  $voiceIndex = 1
  $filterParts += "[$voiceIndex:a]adelay=300|300,atrim=0:15,asetpts=PTS-STARTPTS,volume=1.0,afade=t=in:st=0:d=0.08,afade=t=out:st=13.8:d=0.45[voice]"
}

if ($MusicFile -and (Test-Path $MusicFile)) {
  $args += @("-stream_loop", "-1", "-i", $MusicFile)
  $musicIndex = if ($VoiceFile -and (Test-Path $VoiceFile)) { 2 } else { 1 }
  $filterParts += "[$musicIndex:a]atrim=0:15,asetpts=PTS-STARTPTS,volume=0.18,afade=t=in:st=0:d=0.6,afade=t=out:st=14.2:d=0.8[music]"
}

if (($VoiceFile -and (Test-Path $VoiceFile)) -and ($MusicFile -and (Test-Path $MusicFile))) {
  $filterParts += "[music][voice]sidechaincompress=threshold=0.035:ratio=6:attack=120:release=800[musicduck]"
  $filterParts += "[musicduck][voice]amix=inputs=2:duration=first:dropout_transition=0,alimiter=limit=0.95[aout]"
  $audioMap = "[aout]"
} elseif ($VoiceFile -and (Test-Path $VoiceFile)) {
  $filterParts += "[voice]alimiter=limit=0.95[aout]"
  $audioMap = "[aout]"
} elseif ($MusicFile -and (Test-Path $MusicFile)) {
  $filterParts += "[music]alimiter=limit=0.95[aout]"
  $audioMap = "[aout]"
}

$filterComplex = $filterParts -join ";"
$args += @("-filter_complex", $filterComplex, "-map", "[vout]")
if ($audioMap) {
  $args += @("-map", $audioMap)
} else {
  $args += @("-an")
}
$args += @(
  "-t", "15",
  "-r", "30",
  "-c:v", "libx264",
  "-profile:v", "high",
  "-pix_fmt", "yuv420p",
  "-crf", "18",
  "-preset", "medium",
  "-c:a", "aac",
  "-b:a", "192k",
  "-movflags", "+faststart",
  $OutputFile
)

& $ffmpeg @args
if ($LASTEXITCODE -ne 0) {
  throw "FFmpeg render failed with exit code $LASTEXITCODE"
}

$outJson = & $ffprobe -v error -show_entries format=duration -show_entries stream=width,height,r_frame_rate -of json $OutputFile | ConvertFrom-Json

$report = @"
# Render Report

Status: rendered

## Skills

- HyperFrames: installed for subtitle/title packaging workflows.
- HyperFrames CLI/media: installed for render/media helper workflows.
- Remotion best practices: installed as fallback reference.
- seedance-prompt-zh: used for prompt structure.
- video-use: installed; helper verification passed without paid transcription.

## Input Material

- Source video: `$RawVideo`
- Source duration: $sourceDuration seconds
- Source resolution: ${sourceWidth}x${sourceHeight}
- Source frame rate: $fpsRaw
- Voice track: $(if ($VoiceFile) { $VoiceFile } else { "none" })
- Music track: $(if ($MusicFile) { $MusicFile } else { "none" })

## Output

- File: `$OutputFile`
- Duration: $($outJson.format.duration) seconds
- Resolution: $($outJson.streams[0].width)x$($outJson.streams[0].height)
- Frame rate: $($outJson.streams[0].r_frame_rate)
- Encoding: H.264 video, AAC audio

## Subtitle Timeline

- 0.3-3.0s: 在这里，每一天都有陪伴，
- 3.0-5.3s: 也有欢笑。
- 5.3-8.3s: 棋逢对手，牌逢知己，
- 8.3-12.8s: 让晚年生活温暖而充实。
- 12.8-15.0s: 温暖相伴 · 乐享晚年 / 让每一天，都有值得期待的生活

## Render Command

FFmpeg executable: `$ffmpeg`

Filter complex:

``````
$filterComplex
``````

## Placeholders And Risks

- Voiceover may be local TTS preview unless replaced by a licensed natural Mandarin recording.
- Music may be locally generated preview unless replaced by licensed music.
- No external music was downloaded by Codex.
- Human visual QA is still required for AI-generated hands, cards, chessboard accuracy, watermarks, and dignity/naturalness of elderly subjects.
"@

Set-Content -Path (Join-Path $ProjectRoot "output\render-report.md") -Value $report -Encoding UTF8
Copy-Item -Path (Join-Path $ProjectRoot "subtitles\subtitle-timeline.srt") -Destination (Join-Path $ProjectRoot "output\subtitle-timeline.srt") -Force
Copy-Item -Path (Join-Path $ProjectRoot "prompts\seedance-nursing-home-15s.txt") -Destination (Join-Path $ProjectRoot "output\seedance-prompt-used.txt") -Force

Write-Host "Rendered: $OutputFile"
