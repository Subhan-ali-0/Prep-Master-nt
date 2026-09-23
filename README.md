# Prep Master — complete Next.js source

## Included
- Responsive white Prep Master UI
- Batches / My Batches navigation
- Search
- Enroll state in localStorage
- Telegram welcome popup
- Dynamic batch overview
- Dynamic folder content
- Dynamic lecture list
- Per-lecture authorized playback adapter
- Next.js API routes so upstream API URLs are not placed directly in the browser

## Run locally
1. Install Node.js 18.18+ / 20+.
2. Copy `.env.example` to `.env.local`.
3. `npm install`
4. `npm run dev`
5. Open the local URL shown by Next.js.

## Vercel
Import this folder/repository into Vercel. Add the same environment variables from `.env.example` in Vercel Project Settings → Environment Variables, then deploy.

## Important API note
`BATCHES_API_URL` and `CONTENT_API_BASE` are adapters for an API you are authorized to use. `PLAYBACK_API_URL` is intentionally configurable because each lecture may require its own authorized playback response. Do not put private API keys or protected stream URLs into frontend code or GitHub.
