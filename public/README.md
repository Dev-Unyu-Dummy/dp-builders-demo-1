# Public Folder Safety

Files in this folder are publicly reachable by URL. Do not store secrets, private documents,
environment files, database exports, backups, or user uploads here.

Use `src/utils/publicAssets.js` to reference files from React components. It exposes a small
allow-list of approved asset keys so the app does not build URLs from user-controlled paths.

Safe:

- `/logo.webp`
- `/assets/placeholders/*.svg`
- Static images intended for public display.

Unsafe:

- `.env`
- API keys
- Personal documents
- Uploaded files that have not been validated and renamed server-side
- Any path built from raw user input, especially values containing `../`, `%2e%2e`, or slashes
