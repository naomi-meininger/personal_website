# Naomi Meininger's personal website

Built with React and Vite, deployed to GitHub Pages at https://naomi-meininger.github.io/personal_website/.

## Updating content

Most edits only touch the files in `src/data/`:

| File | What it holds |
| --- | --- |
| `experience.js` | Jobs and education on the home page |
| `projects.js` | Projects, their topics (for the filter) and links |
| `skills.js` | Skill groups |
| `theater.js` | Tufts theater credits |
| `links.js` | Email, GitHub, LinkedIn and résumé links, and the nav |

To swap your résumé, replace `public/meininger naomi resume.pdf` with a file of the same name.

## Running locally

```bash
npm install
npm run dev      # local dev server with live reload
npm run build    # production build into dist/
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repo's **Settings → Pages**, **Source** must be set to **GitHub Actions**.

## Structure

- `index.html`, `projects.html`, `skills.html`, `ventures.html`: one entry per page, so old links keep working
- `src/pages/`: the React component for each page
- `src/components/`: shared layout (header, footer) and the credit-line component
- `src/styles.css`: all styles
- `public/`: PDFs and older images, served as-is from the site root
