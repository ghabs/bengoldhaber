# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal website for Ben Goldhaber (bengoldhaber.com). Essay pages are written in Markdown and converted to HTML using a simple Node.js build script. The site is designed to be simple, maintainable, and deployable to any static hosting service.

## Architecture

**Site Structure:**
- `index.html` - Main landing page with About and Essays sections (static HTML with JS for dynamic essay loading)
- `styles.css` - Single shared stylesheet for all pages
- `content/` - Directory containing Markdown source files for essays
  - `some-areas-im-excited-about.md`
- `build.js` - Build script that converts Markdown to HTML and generates essays.json (also contains external essay links)
- `essays.json` - Generated metadata file listing all essays (auto-generated, do not edit)
- `*.html` - Generated essay pages (built from Markdown, not edited directly)

**Design System:**
All pages use a consistent design with these key elements:
- Max-width centered layout (700px)
- System font stack for native appearance
- Reusable CSS classes: `.back-link`, `.status-notice`, `.intro`, `.contact`, `.sidenote`, `.example-projects`, `.related-links`, `.footnote`
- Essay listing classes: `.about-section`, `.essays-section`, `.essay-item`, `.essay-header`, `.essay-date`, `.essay-description`, `.essay-status`
- Mobile responsive breakpoint at 600px

**Index Page Architecture:**
The front page is split into two main sections:
1. **About Section** - Personal introduction and bio
2. **Essays Section** - Dynamically loaded list of essays from `essays.json`, sorted by date (newest first), displaying title, date, description, and optional status badge

## Common Tasks

**Initial setup:**
```bash
npm install
```

**Building the site:**
```bash
npm run build
```
This converts all Markdown files in `content/` to HTML files in the root directory and generates `essays.json` with metadata for the front page essay listing.

**Development workflow:**
1. Edit Markdown files in `content/` directory
2. Run `npm run build` to regenerate HTML
3. Test locally using a simple HTTP server:
```bash
python -m http.server 8000
# or
python3 -m http.server 8000
```

**Deploying:**
Run `npm run build` first, then upload the generated HTML files, `essays.json`, `index.html`, and `styles.css` to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

**Adding a new essay page:**
1. Create a new `.md` file in the `content/` directory
2. Add YAML frontmatter at the top:
```yaml
---
title: "Your Essay Title"
date: "YYYY-MM-DD"
description: "Short 1-2 sentence summary of the essay"
status: "Stub" or "Rough cut" (optional)
---
```
3. Write the essay content in Markdown below the frontmatter
4. Run `npm run build` to generate the HTML and update essays.json
5. The essay will automatically appear on the front page (no manual linking needed)

**Adding an external essay link:**
To link to essays published elsewhere (e.g., Substack):
1. Edit `build.js` and add an entry to the `externalEssays` array:
```javascript
{
  title: "Essay Title",
  description: "Short description",
  date: "YYYY-MM-DD",
  url: "https://external-url.com",
  external: true
}
```
2. Run `npm run build` to update essays.json
3. External essays will open in a new tab when clicked

## Content Guidelines

**Markdown frontmatter:**
Each essay markdown file must start with YAML frontmatter:
- `title` (required): The page title
- `date` (required): Publication/last updated date in YYYY-MM-DD format
- `description` (required): Short 1-2 sentence summary for the front page listing
- `status` (optional): "Rough cut" or "Stub" - displayed as a badge on essay pages and in the front page listing

**Writing in Markdown:**
- Standard Markdown syntax is supported (headings, lists, links, emphasis, blockquotes)
- HTML can be embedded directly when needed (e.g., for `<div class="sidenote">` or `<sup>` tags)
- The build script automatically wraps content in proper HTML structure with back-link and status notice

**Styling patterns in Markdown:**
- Use `>` for blockquotes (extended quotes)
- Use `<div class="sidenote">...</div>` for tangential information (requires raw HTML)
- Use `<sup>` tags for footnote references (requires raw HTML)
- Section headings with `##` are automatically wrapped in appropriate styles
- Lists at the end can use standard Markdown list syntax
