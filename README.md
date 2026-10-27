# ScanMyCard website

Marketing site for the ScanMyCard Android app, live at **https://scanmycard.in**.

Plain static HTML/CSS/JS: no build step and no npm. Open `index.html` in a browser to preview.

## Pages
`/` home · `/pricing` · `/privacy` · `/terms` · `/refund-policy` · `/delete-account` · `/support` · `404.html`

The Privacy, Terms, Refund and Delete-account URLs are used in Google Play Console and Razorpay KYC. Keep these paths.

## Editing
- Prices appear in `index.html`, `pricing/index.html` and the home page JSON-LD, each marked with a `<!-- PRICING -->` comment. Keep them in sync with the app and backend.
- The Play Store link is in the page hrefs and in `PLAY_URL` in `assets/js/site.js`.
- After changing CSS or JS, bump the `?v=` number where the files are linked (they're cached for 30 days).

## Hosting
- **Hostinger** (scanmycard.in): upload the folder contents to `public_html`. `.htaccess` handles HTTPS/www redirects, clean URLs, 404 and caching.
- **Vercel**: works as-is. `vercel.json` turns on clean URLs.
