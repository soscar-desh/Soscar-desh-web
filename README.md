# Personal Website (Single-page Dark Theme)

This repo now contains a **single-page** dark-themed personal site. About and Contact content have been consolidated into `index.html` as anchored sections (`#about`, `#projects`, `#contact`).

Files now:
- `index.html` — single-page site with Hero, About, Projects, Contact sections
- `css/styles.css` — dark theme and layout styles (responsive)
- `js/script.js` — nav handling (smooth scrolling, active link) and contact form stub
- `images/profile.png` & `images/about.jpg` — placeholders (profile for Sheryl Mwende). Save your About photo as `images/about.jpg` to use it on the site.

Preview locally
1. Open `index.html` in your browser (double-click or use Live Server in VS Code).

Hosting / Deploy options
- GitHub Pages (easy & free): push to a repo and enable Pages on the branch/root. Good for quick personal hosting.
- Netlify (free tier + easy continuous deploy): connect your repo or drag & drop site folder.
- Personal hosting (VPS / self-hosted): DigitalOcean, Linode, etc. Set up nginx and point a domain to your VPS IP.

Notes on contact
- The contact form is a client-side stub that shows an inline confirmation. To receive emails, connect with Netlify Forms, Formspree, or implement a backend endpoint.

Next steps
- Replace placeholder text and images with your real content.
- Improve accessibility (ARIA, keyboard focus styles) and cross-browser checks — currently in progress.
- I can set up Git + GitHub Pages or Netlify for continuous deploy when you're ready.

License: MIT (replace if needed).