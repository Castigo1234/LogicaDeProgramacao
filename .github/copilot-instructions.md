# Copilot / AI Agent Instructions

This is a small static JavaScript demo project (a simple number-guessing "JS Game"). The guidance below focuses on the concrete, discoverable patterns and workflows that make an AI agent immediately productive in this repository.

Key files and locations
- `index.html` — primary page; links `style.css` and `app.js` (root). Use this as the entry point for UI changes.
- `style.css` — global styles; uses a BEM-like naming convention (e.g. `container__conteudo`, `container__texto-azul`). Keep changes consistent with existing classes.
- `app.js` (root) — a small script present at repository root. It contains placeholder/sample code and some syntax errors; treat it as a scratch file unless explicitly refactoring.
- `img/JS Game_files/app.js` — contains the commented game logic and is the actual source of the playable game examples. Edit here for game logic.
- `img/` — image assets (`robot.png`, `trophy.png`, `Ruido.png`, `code.png`, etc.). Add new images here and reference them with relative paths from `index.html`.

Architecture & Patterns
- Static site: HTML, CSS and vanilla JavaScript only — there are no build tools, package.json, or server-side components.
- CSS classes follow a BEM-like pattern (`block__element`), and large, fixed container sizes are used (e.g. `.container { width: 1200px; height: 600px; }`). Prefer small, consistent edits to avoid breaking layout.
- Fonts are loaded from Google Fonts in `index.html`. External network dependency: Google Fonts only.
- `defer` is used on script tags to ensure DOM availability — preserve `defer` when moving or splitting scripts.

Developer workflows (how to run / debug)
- Live editing: the project was developed with the VS Code Live Server extension (see `img/JS Game.html` which contains the Live Server injection snippet). Recommended quick options:

  - With Live Server (VS Code): open `index.html` and click "Go Live".
  - Simple HTTP server (PowerShell):

    ```powershell
    cd 'c:/Users/benut/Desktop/VS-CODE ESTUDOS/LogicaDeProgramacao'
    python -m http.server 5500
    ```

- Debugging: use browser DevTools console; `app.js` at root may throw syntax errors — check which `app.js` is referenced by the page being served. `index.html` references the root `app.js`.

Conventions and repo-specific notes
- Prefer modifying `img/JS Game_files/app.js` for game logic examples because it contains the playable, commented samples. The root `app.js` appears to be an earlier or experimental file and includes invalid JS (e.g. `const nome = (lua)`) — treat with caution.
- When adding or renaming images, update `index.html` and `style.css` relative paths. Example: to add `new.png` place it in `img/` and reference `img/new.png`.
- Maintain the existing class naming (e.g. `container__...`) instead of introducing a radically different convention.

Pull requests and code edits
- Small, focused PRs are preferred. Example changes:
  - "Fix game logic in `img/JS Game_files/app.js` and enable gameplay by uncommenting and cleaning up variables." 
  - "Refactor layout in `style.css` to be responsive, keep BEM class names and update `index.html` markup accordingly."

What not to change without confirmation
- Do not remove the `defer` attribute or move scripts inline without confirming behavior in the browser.
- Do not rename `index.html` or image files without updating references in both HTML and CSS.

Examples (concrete edits an agent may perform)
- To enable the commented game code: open `img/JS Game_files/app.js`, uncomment the main block, and convert `prompt`/`alert` usage to DOM interactions if the intent is an in-page experience.
- To add a new screen state: add a new element inside `.container__conteudo` in `index.html` and style it in `style.css` using the existing naming pattern.

If anything is missing or you want the agent to follow a stricter workflow (linting, tests, or a build step), tell us where to add those files (for example a `package.json` or a `Makefile`) and we will update these instructions.

— End of agent guidance —
