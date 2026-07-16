const DEFAULT_R2_PUBLIC_URL =
  "https://pub-faa918d87407467fabebe0ae4bcbb26b.r2.dev";

export function assetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const configuredBase = import.meta.env.VITE_R2_PUBLIC_URL?.trim();
  const base = (configuredBase || DEFAULT_R2_PUBLIC_URL).replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

/**
 * 3D 模型与其他静态资源使用同一个公开 R2 bucket。
 * Bucket CORS 允许浏览器和 Three.js 跨域流式读取模型。
 */
export function modelAssetUrl(path: string): string {
  return assetUrl(path);
}
