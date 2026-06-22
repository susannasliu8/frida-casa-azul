/**
 * Generates on-theme placeholder artwork for the Casa Azul site.
 * These are stylized, hand-drawn-in-code SVGs (not photos of Frida) meant to
 * stand in until real, rights-cleared photography is dropped into /public/art.
 *
 *   node scripts/gen-art.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const artDir = resolve(root, "public/art");
const texDir = resolve(root, "public/textures");
mkdirSync(artDir, { recursive: true });
mkdirSync(texDir, { recursive: true });

const palettes = {
  azul: { bg: "#1f6aa5", deep: "#15445f" },
  verde: { bg: "#5a7d4f", deep: "#38502f" },
  terracota: { bg: "#bf4e30", deep: "#7e2f1c" },
  amarillo: { bg: "#e3a008", deep: "#9c6b04" },
  rosa: { bg: "#c1357a", deep: "#7d2150" },
};

const skin = "#e9b890";
const skinShade = "#d99f74";
const hair = "#241a17";
const lip = "#a82a4f";
const bone = "#f6efe1";

const W = 600;
const H = 800;

function frame(p) {
  return `
    <rect x="0" y="0" width="${W}" height="${H}" fill="${p.bg}"/>
    <rect x="0" y="0" width="${W}" height="${H}" fill="url(#grain)"/>
    <rect x="22" y="22" width="${W - 44}" height="${H - 44}" fill="none"
          stroke="${bone}" stroke-opacity="0.55" stroke-width="3"/>
    <rect x="32" y="32" width="${W - 64}" height="${H - 64}" fill="none"
          stroke="${p.deep}" stroke-opacity="0.6" stroke-width="6"/>`;
}

function flower(cx, cy, r, color) {
  const petals = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI * 2 * i) / 6;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    petals.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(r * 0.7).toFixed(1)}" fill="${color}"/>`);
  }
  return `${petals.join("")}<circle cx="${cx}" cy="${cy}" r="${(r * 0.6).toFixed(1)}" fill="${"#f2b705"}"/>`;
}

function leaf(cx, cy, rot) {
  return `<g transform="translate(${cx} ${cy}) rotate(${rot})">
    <path d="M0 0 C 18 -28 18 -58 0 -82 C -18 -58 -18 -28 0 0 Z" fill="#5a7d4f"/>
    <path d="M0 0 L0 -78" stroke="#38502f" stroke-width="2.5"/>
  </g>`;
}

/* A stylized portrait — a nod to Frida (flower crown, the famous brow) without
   impersonating a real photograph. */
function portrait(p) {
  return `
    ${frame(p)}
    <!-- shoulders / rebozo -->
    <path d="M${W / 2 - 230} ${H} C ${W / 2 - 150} ${H - 230}, ${W / 2 + 150} ${H - 230}, ${W / 2 + 230} ${H} Z"
          fill="${p.deep}"/>
    <path d="M${W / 2 - 150} ${H} C ${W / 2 - 90} ${H - 150}, ${W / 2 + 90} ${H - 150}, ${W / 2 + 150} ${H} Z"
          fill="#c1357a"/>
    <!-- neck -->
    <rect x="${W / 2 - 38}" y="430" width="76" height="120" rx="22" fill="${skinShade}"/>
    <!-- hair back -->
    <ellipse cx="${W / 2}" cy="320" rx="190" ry="205" fill="${hair}"/>
    <!-- face -->
    <ellipse cx="${W / 2}" cy="330" rx="138" ry="165" fill="${skin}"/>
    <ellipse cx="${W / 2}" cy="345" rx="138" ry="150" fill="${skin}"/>
    <!-- cheeks -->
    <circle cx="${W / 2 - 78}" cy="370" r="26" fill="#d98a86" opacity="0.45"/>
    <circle cx="${W / 2 + 78}" cy="370" r="26" fill="#d98a86" opacity="0.45"/>
    <!-- the unibrow -->
    <path d="M${W / 2 - 95} 300 Q ${W / 2 - 45} 282 ${W / 2} 296 Q ${W / 2 + 45} 282 ${W / 2 + 95} 300
             Q ${W / 2 + 45} 308 ${W / 2} 308 Q ${W / 2 - 45} 308 ${W / 2 - 95} 300 Z" fill="${hair}"/>
    <!-- eyes -->
    <ellipse cx="${W / 2 - 52}" cy="330" rx="26" ry="17" fill="#fff"/>
    <ellipse cx="${W / 2 + 52}" cy="330" rx="26" ry="17" fill="#fff"/>
    <circle cx="${W / 2 - 50}" cy="332" r="9" fill="${hair}"/>
    <circle cx="${W / 2 + 54}" cy="332" r="9" fill="${hair}"/>
    <!-- nose -->
    <path d="M${W / 2} 330 Q ${W / 2 + 16} 380 ${W / 2} 392 Q ${W / 2 - 16} 392 ${W / 2 - 12} 384"
          fill="none" stroke="${skinShade}" stroke-width="5" stroke-linecap="round"/>
    <!-- lips -->
    <path d="M${W / 2 - 42} 420 Q ${W / 2} 408 ${W / 2 + 42} 420 Q ${W / 2} 452 ${W / 2 - 42} 420 Z" fill="${lip}"/>
    <path d="M${W / 2 - 42} 420 Q ${W / 2} 426 ${W / 2 + 42} 420" stroke="${"#6f1832"}" stroke-width="2.5" fill="none"/>
    <!-- flower crown -->
    ${leaf(W / 2 - 150, 230, -35)}
    ${leaf(W / 2 + 150, 230, 35)}
    ${flower(W / 2 - 120, 175, 30, "#bf4e30")}
    ${flower(W / 2 - 50, 140, 34, "#c1357a")}
    ${flower(W / 2 + 28, 138, 32, "#e3a008")}
    ${flower(W / 2 + 110, 178, 30, "#c1357a")}
    ${leaf(W / 2 - 30, 150, -8)}
    ${leaf(W / 2 + 70, 150, 10)}`;
}

/* An abstract "painting" — botanical / symbolic, in her palette. */
function still(p, variant) {
  const motifs = {
    sun: `
      <circle cx="${W / 2}" cy="${H / 2 - 40}" r="120" fill="#e3a008"/>
      ${Array.from({ length: 16 }, (_, i) => {
        const a = (Math.PI * 2 * i) / 16;
        const x1 = W / 2 + Math.cos(a) * 130;
        const y1 = H / 2 - 40 + Math.sin(a) * 130;
        const x2 = W / 2 + Math.cos(a) * 185;
        const y2 = H / 2 - 40 + Math.sin(a) * 185;
        return `<line x1="${x1.toFixed(0)}" y1="${y1.toFixed(0)}" x2="${x2.toFixed(0)}" y2="${y2.toFixed(0)}" stroke="#f2b705" stroke-width="10" stroke-linecap="round"/>`;
      }).join("")}
      <circle cx="${W / 2}" cy="${H / 2 - 40}" r="70" fill="#bf4e30"/>`,
    heart: `
      <path d="M${W / 2} ${H / 2 + 130}
               C ${W / 2 - 180} ${H / 2 - 30}, ${W / 2 - 70} ${H / 2 - 170}, ${W / 2} ${H / 2 - 50}
               C ${W / 2 + 70} ${H / 2 - 170}, ${W / 2 + 180} ${H / 2 - 30}, ${W / 2} ${H / 2 + 130} Z"
            fill="#c1357a"/>
      <path d="M${W / 2} ${H / 2 - 50} L ${W / 2} ${H / 2 + 60}" stroke="${bone}" stroke-width="6" opacity="0.6"/>`,
    vine: `
      ${Array.from({ length: 7 }, (_, i) => leaf(120 + i * 60, 250 + (i % 2) * 60, i % 2 ? 30 : -30)).join("")}
      ${Array.from({ length: 6 }, (_, i) => leaf(150 + i * 60, 540 + (i % 2) * 60, i % 2 ? -25 : 25)).join("")}
      ${flower(W / 2, H / 2, 60, "#c1357a")}`,
  };
  return `${frame(p)}${motifs[variant] || motifs.vine}`;
}

function svg(inner) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img">
  <defs>
    <filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/></filter>
    <pattern id="grain" width="${W}" height="${H}" patternUnits="userSpaceOnUse">
      <rect width="${W}" height="${H}" filter="url(#g)" opacity="0.06"/>
    </pattern>
  </defs>
  ${inner}
</svg>`;
}

const art = [
  ["portrait-coyoacan", portrait(palettes.azul)],
  ["portrait-polio", portrait(palettes.verde)],
  ["painting-accident", still(palettes.terracota, "heart")],
  ["painting-mirror", portrait(palettes.rosa)],
  ["painting-easel", still(palettes.amarillo, "sun")],
  ["portrait-diego", portrait(palettes.terracota)],
  ["painting-detroit", still(palettes.azul, "heart")],
  ["painting-henryford", still(palettes.verde, "vine")],
  ["portrait-tehuana", portrait(palettes.rosa)],
  ["painting-roots", still(palettes.verde, "vine")],
  ["painting-column", still(palettes.azul, "vine")],
  ["painting-vivalavida", still(palettes.terracota, "sun")],
];

for (const [name, inner] of art) {
  writeFileSync(resolve(artDir, `${name}.svg`), svg(inner));
}

/* Subtle plaster grain for the page background. */
const plaster = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="260" height="260" viewBox="0 0 260 260">
  <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/></filter>
  <rect width="260" height="260" fill="#f6efe1"/>
  <rect width="260" height="260" filter="url(#n)" opacity="0.05"/>
</svg>`;
writeFileSync(resolve(texDir, "plaster.svg"), plaster);

console.log(`Generated ${art.length} artworks + plaster texture.`);
