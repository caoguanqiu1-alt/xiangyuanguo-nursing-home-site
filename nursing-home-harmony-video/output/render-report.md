# Render Report

Status: pending source video.

## Environment

- OS: Windows, PowerShell workflow.
- Node.js: 24.16.0, satisfies HyperFrames Node.js 22+ requirement.
- FFmpeg: 8.1.1 installed through winget.
- Python: 3.12.10.
- HyperFrames CLI: `npx --yes hyperframes --version` returned 0.6.84.
- Remotion CLI: not globally installed; use project-local Remotion scaffold if fallback rendering is needed.
- yt-dlp: optional, not installed.
- ElevenLabs API key: not configured; no paid API calls were made.

## Skills

- HyperFrames: installed and available for subtitle/title packaging.
- HyperFrames CLI/media: installed for local render and media helper workflows.
- Remotion best practices: installed as a fallback React video composition reference.
- seedance-prompt-zh: installed and used to structure the Seedance 2.0 prompt.
- video-use: installed, helper verification passed without running paid transcription.

## Current Inputs

- Source video: pending. Place the generated Seedance MP4 in `assets/raw-video/`.
- Voiceover: ElevenLabs missing; local TTS preview generated at `assets/voice/narration-preview-local-tts.wav` (about 13.37 seconds).
- Music: no external music downloaded; local generated preview bed at `assets/music/warm-light-bgm-preview-generated.wav` (15 seconds).
- Subtitles: `subtitles/subtitle-timeline.srt` and `subtitles/nursing-home-harmony.ass`.

## Target Output

- File: `output/nursing-home-harmony-15s-final.mp4`
- Duration: 15 seconds
- Resolution: 1080x1920
- Aspect ratio: 9:16
- Codec: H.264 video, AAC audio

## Pending Manual Step

Copy the Seedance-generated 15 second MP4 into `assets/raw-video/`, then ask Codex to continue rendering.

## Manual QA Required After Source Video Is Added

- Check elderly subjects are natural, friendly, and dignified.
- Check hands, playing cards, Chinese chess board, and chess pieces for AI artifacts.
- Check there is no watermark or generated text in the raw video.
- Check subtitles do not cover hands, cards, or chess board.
- Check music remains below narration.
