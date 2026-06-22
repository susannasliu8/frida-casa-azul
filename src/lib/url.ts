/**
 * Prefix a site-absolute asset path with Astro's configured base, so links work
 * both on the production site (base "/") and on per-PR preview subpaths.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
