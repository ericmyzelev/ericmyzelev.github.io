# Eric Tal Myzelev — academic website

A static academic website. No package installation or build step is required.

## Files

- `index.html`: biography, research interests, publications, abstracts, contact information, and search metadata.
- `styles.css`: colors, typography, layout, responsive styles, and print styles.
- `script.js`: current navigation section and copyright year.
- `profile_photo.jpg`, `favicon.svg`, and the two PDFs: existing site assets.

## Preview and publish

Open `index.html` in a browser to preview the site. Publish the files together in the root of a static host such as GitHub Pages.

The site uses local assets, system fonts, and native MathML for equations. It makes no third-party requests. Navigation, publication links, abstract disclosure controls, and equations work without JavaScript. Wide equations can be scrolled horizontally on narrow screens.

## Updating content

Edit the content directly in `index.html`. Each publication is an `article` inside `.publications`, with resource links followed by a native `details` element containing its abstract. When adding a paper, give its heading a unique ID and use that ID for the article's `aria-labelledby` attribute.

To adjust the design, start with the variables at the top of `styles.css`.
