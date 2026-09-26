# The Money Margin

> Personal finance & credit management field guide for working adults in their 20s and 30s. Written by Daniel Reyes from Austin, Texas.

Website URL: [https://themoneymargin.com](https://themoneymargin.com)  
Repository: [https://github.com/wrwanshenchen-boop/themoneymargin](https://github.com/wrwanshenchen-boop/themoneymargin)

---

## Tech Stack & Architecture

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generator)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Typography:** Inter Bold (Headings) + Charter / Georgia (Serif body text)
- **Design Palette:** Deep Navy (`#1A2B3C`), Warm Orange (`#E67E22`), Warm Cream (`#FAF8F5`)
- **Content:** Astro Content Collections (`src/content/articles/`) with strict schema validation
- **Hosting & CI/CD:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
# -> http://localhost:4321

# Build production static site (output to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## How to Deploy to GitHub Pages

### Step 1: Initialize Git and Push to GitHub

In your project directory, open PowerShell or Terminal:

```bash
# 1. Initialize git (if not already done)
git init
git branch -M main

# 2. Add remote repository
git remote add origin https://github.com/wrwanshenchen-boop/themoneymargin.git

# 3. Stage and commit all files
git add .
git commit -m "feat: complete The Money Margin site with 12 articles, About, Contact, Privacy, and Pages workflow"

# 4. Push to main branch
git push -u origin main
```

*(Note: Ensure your `.gitignore` excludes `node_modules/`, `dist/`, and `.astro/`.)*

### Step 2: Configure GitHub Pages Settings

1. Open your repository on GitHub: [https://github.com/wrwanshenchen-boop/themoneymargin](https://github.com/wrwanshenchen-boop/themoneymargin)
2. Go to **Settings** $\rightarrow$ **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (NOT "Deploy from a branch").
4. *(Optional Custom Domain)*: If you have already bound `themoneymargin.com`:
   - Enter `themoneymargin.com` under **Custom domain** and save.
   - Check **Enforce HTTPS**.
5. Once you push to `main`, GitHub Actions will automatically trigger the workflow in `.github/workflows/deploy.yml` and publish your site.

---

## Project Structure

```text
├── .github/workflows/deploy.yml   # GitHub Actions automated deploy pipeline
├── articles/                      # 12 original finalized Markdown articles (source files)
├── drafts/original-backup/        # Safety backups of raw Markdown drafts
├── public/
│   ├── favicon.svg                # Site favicon
│   └── images/daniel-avatar.svg   # Vector line-art avatar for Daniel Reyes
├── src/
│   ├── components/
│   │   ├── Header.astro           # Header navigation
│   │   └── Footer.astro           # Footer with disclaimer, copyright & legal links
│   ├── content/
│   │   ├── config.ts              # Zod collection schema
│   │   └── articles/              # 12 Markdown articles with full metadata
│   ├── layouts/
│   │   └── BaseLayout.astro       # Root HTML layout with magazine typography
│   ├── pages/
│   │   ├── index.astro            # Home page (Hero + Article Cards)
│   │   ├── about.astro            # About Daniel Reyes
│   │   ├── contact.astro          # Contact form & direct email
│   │   ├── privacy.astro          # Full GDPR/AdSense Privacy Policy
│   │   └── articles/
│   │       ├── index.astro        # All articles archive
│   │       └── [slug].astro       # Dynamic article reader layout
│   └── styles/
│       └── global.css             # Tailwind base & custom font setup
├── astro.config.mjs               # Astro site config
├── tailwind.config.mjs            # Tailwind color & font tokens
└── package.json
```

---

## Legal & Compliance

- **Author:** Daniel Reyes, Austin, Texas
- **Contact:** `wrwanshenchen@gmail.com`
- **Copyright:** © 2026 The Money Margin. All rights reserved.
- **Disclaimer:** All content is for educational and informational purposes only and does not constitute formal financial, investment, or legal advice.
