# Voice Assets

ElevenLabs API key is not configured in this environment, so no paid ElevenLabs voiceover has been generated.

Safe setup:

1. Create an ElevenLabs API key in your ElevenLabs account.
2. Set it as an environment variable without printing it in the terminal:

```powershell
[Environment]::SetEnvironmentVariable("ELEVENLABS_API_KEY", "YOUR_KEY_HERE", "User")
```

3. Restart Codex or open a new PowerShell session before using it.

For this project, a local Windows Chinese TTS preview track may be generated as:

`assets/voice/narration-preview-local-tts.wav`

This preview is only a temporary guide. Replace it with a licensed, natural Mandarin voiceover before final publication if higher voice quality is required.
