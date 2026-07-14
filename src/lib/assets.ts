export function assetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.VITE_R2_PUBLIC_URL ?? "";
  return `${base}${path}`;
}

/**
 * 3D 模型资源使用同域相对路径，避免 R2 跨域问题。
 * 生产环境通过 Caddy 反向代理到 R2 公开桶。
 */
export function modelAssetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return path;
}
