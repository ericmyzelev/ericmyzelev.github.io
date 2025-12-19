# Academic Portfolio

Static, single-page academic portfolio built with plain HTML, CSS, and JavaScript.

## Run locally
1. Clone the repository and move into it:
   ```bash
   git clone <repo-url>
   cd ericmyzelev.github.com
   ```
2. Open `index.html` directly in your browser **or** serve locally for smooth scrolling and asset loading:
   ```bash
   python -m http.server 8000
   ```
   Then visit http://localhost:8000/.

## Deploy to GitHub Pages
1. Commit your changes and push to the `main` (or `gh-pages`) branch.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the branch (e.g., `main`) and root folder (`/`).
4. Save the settings. Pages will publish the site at `https://<username>.github.io/<repository>/` (or `https://<username>.github.io/` for a user site).
5. After deployment, verify meta tags and open graph previews using a social card debugger.
