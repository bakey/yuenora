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
- Large runtime assets live in the independent `yuenora-assets` R2 bucket. The frontend defaults to its public URL; set `VITE_R2_PUBLIC_URL` only to override it. `public/` is reserved for small files that are intentionally tracked in Git.
- Run `npm run assets:list` to print the complete R2 object-key manifest referenced by the frontend, including dynamically generated bracelet thumbnails and GLB models.
- `node_modules`, previous build output, logs, Git metadata, and temporary preview folders are intentionally not included in this package.
