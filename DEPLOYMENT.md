# Yuenling Website Deployment

This package contains the production source for the Yuenling blessing jewelry website.

## Requirements

- Node.js 18 or newer
- npm

## Install

```bash
npm install
```

## Local Preview

```bash
npm run dev
```

The Vite dev server will print the local preview URL.

## Production Build

```bash
npm run build
```

The build output is generated in `dist/`.

## Deploy

Deploy the contents of `dist/` to the hosting platform.

## Notes

- Source code lives in `src/`.
- Static assets live in `public/`.
- `node_modules`, previous build output, logs, Git metadata, and temporary preview folders are intentionally not included in this package.
