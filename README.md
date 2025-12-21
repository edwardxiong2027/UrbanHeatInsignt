<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1_2vxh3q8vlmAOw8sOCFMzwYs8pXtNi0g

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy (Firebase Hosting)

This repo includes `firebase.json` + `.firebaserc` configured for a Vite build (`dist`) and single-page app rewrites.

1. Install the Firebase CLI:
   `npm i -g firebase-tools`
2. Login:
   `firebase login`
3. Build:
   `npm run build`
4. Deploy:
   `firebase deploy --only hosting`

Note: `GEMINI_API_KEY` is currently embedded into the client bundle at build time (see `vite.config.ts`). Don’t deploy with a secret API key unless you’re comfortable exposing it publicly.
