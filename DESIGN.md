# VILS Lab visual refresh

## Build and publish

The site retains Jekyll and the existing GitHub Pages workflow. No Node build is required.

```sh
bundle install
bundle exec jekyll serve
```

Review the site, then merge the redesign branch into `main` to trigger the existing Pages workflow.

## Editing content

- Add real members to `_members/` with the existing front matter structure. The People page renders this collection automatically.
- Add verified papers to `_data/lab-publications.yaml`: `title`, `authors` (string), `venue`, `year`, and `link`. Publication search appears when entries exist.
- Add real announcements to `_posts/`. Updates render automatically.
- The original template people and posts are retained but excluded in `_config.yaml`. Original sample citation/project data is retained, but is not presented as VILS research.
- The supervisor is Dr. Arash Abdi, as supplied by the user. The university name, official lab email, and address are still unspecified. The contact page uses the existing member email and actual GitHub organization.
- `_data/research-projects.yaml` is the shared source for project sections, personal research pages, and member research links. The three research topics and member names were supplied by the user. Descriptions explain their scope without claiming results or particular implementations.
- Member profiles use `_layouts/research-profile.html`; `project` in member front matter links to the research data. Set `initials` for a member without a supplied image. The supervisor uses `role: supervisor` and appears separately from the research team.
- The project visuals use original SVG/CSS diagrams with enhancement, offline/online, and code/behavior controls. They illustrate concepts rather than experiment outputs. Per-project pause controls, reduced-motion preferences, offscreen pausing, and hidden-page pausing are supported.
- Project styling and behavior live in `assets/css/projects.css` and `assets/js/projects.js`; shared diagrams live in `_includes/project-motion.html`.
- Shared styles: `assets/css/lab.css`. Shared navigation and publication search: `assets/js/lab.js`. Shared header/footer: `_includes/`.
- The homepage has one fixed ViT-inspired network illustration: image patches, tokens with position information, transformer encoder connections, and a learned representation. Its topology stays fixed; only subtle signal trails and node brightness animate. It includes pause/play, reduced-motion support, and offscreen/hidden-page pausing. It is a conceptual illustration, not a claim that every project uses ViT. Styles/behavior: `assets/css/showcase.css` and `assets/js/showcase.js`.
- The supplied laboratory JPEG is retained unchanged at `assets/images/vils-lab-logo.jpg`. `assets/images/mark.svg` and `images/logo.svg` embed that exact original image in a viewBox that trims whitespace; this mark is used in the header, footer, favicon, and publisher metadata.
- Tab icons are rendered as browser-compatible PNGs (16/32px) and a multi-size ICO (16/32/48/256px), using versioned paths under `assets/icons/`. A root `favicon.ico` provides the conventional fallback. Favicon links are declared once in `_includes/head.html`; they use the supplied mark without depending on embedded JPEG support in SVG favicons.

## Visual direction

Warm paper, forest green, burnt orange, spacious editorial typography, technical micro-labels, and original geometric illustrations. English remains the site language; the existing Persian member name and description are preserved.
