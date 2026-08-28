# Adam Electrical website

Official website for Adam Electrical, built with Vinext and prepared for deployment to Cloudflare Workers.

## Local development

Requires Node.js 22 or newer.

1. Install dependencies: `npm ci`
2. Start the local website: `npm run dev`
3. Open `http://localhost:3000`

## Production check

Run `npm run build`. The deployable server and static assets are written to `dist/`.

## Connect GitHub to Cloudflare

1. Create a new empty GitHub repository.
2. Push this repository's `main` branch to GitHub.
3. In the GitHub repository, open **Settings → Secrets and variables → Actions**.
4. Add these repository secrets:
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_API_TOKEN`
5. Use a Cloudflare API token that can deploy Workers for the selected account.
6. Push to `main`, or open **Actions → Deploy to Cloudflare → Run workflow**.

The included workflow installs, builds and deploys the site automatically. Cloudflare settings are defined in `wrangler.jsonc`.

## Custom domain

After the first successful deployment, open the Worker in the Cloudflare dashboard and add the required domain under **Settings → Domains & Routes**.

## Repository safety

Local environment files, generated builds, development state and dependencies are excluded from Git. Do not commit API tokens or account credentials.
