# book-your-resort
book-your-resort

## Development Stability (Turbopack + Webpack)

### Start commands

- `npm run dev` (default Turbopack)
- `npm run dev:turbo` (explicit Turbopack)
- `npm run dev:webpack` (fallback if Turbopack crashes)

### If you hit Turbopack panic

1. Stop all running Next servers.
2. Run `npm run clean:next`.
3. Start again with `npm run dev:turbo`.
4. If panic repeats, use `npm run dev:webpack` and continue development.
5. Reinstall dependencies only if needed:
   - `npm run reinstall`

### How to read panic logs

- Panic logs are written under your temp directory (example):
  - `C:\\Users\\<user>\\AppData\\Local\\Temp\\next-panic-*.log`
- Focus on the first meaningful block:
  - `Failed to write app endpoint ...`
  - `Caused by: ...`
- In this project, the recurring panic cause was:
  - `Next.js package not found`

### Project policy for reliability

- Use Turbopack by default for speed.
- Use Webpack fallback (`npm run dev:webpack`) when Turbopack has environment-level instability.
- Keep dependencies clean and avoid mixed package manager lock files.
- Prefer lowercase routes and stable import paths.
