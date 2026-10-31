// Generates the static images used for link previews and icons:
//   public/og-image.jpg          1200×630 share card (Open Graph / Twitter / WhatsApp / Slack…)
//   public/portrait.jpg          600×600 portrait for structured data
//   public/apple-touch-icon.png  180×180 home-screen icon
//   public/favicon-32.png        32×32 PNG fallback for browsers without SVG favicons
// Run with: npm run social-images
import sharp from 'sharp';

const cutout = 'src/assets/profile-cutout.png';
const out = (name) => `public/${name}`;

const navy = '#14213d';
const blue = '#2546c9';
const gold = '#c08a1e';
const paper = '#fbfaf7';

// ---------- Share card ----------
const W = 1200;
const H = 630;
const cx = 905; // portrait circle
const cy = 300;
const r = 225;

const tags = ['Business value of IT', 'IT governance', 'E-government'];
let tagX = 72;
const tagSvg = tags
  .map((t) => {
    const w = t.length * 9.6 + 36;
    const svg = `<rect x="${tagX}" y="468" width="${w}" height="40" rx="20" fill="#ffffff" stroke="rgba(20,33,61,0.12)"/>
      <text x="${tagX + w / 2}" y="494" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="600" fill="${blue}">${t}</text>`;
    tagX += w + 12;
    return svg;
  })
  .join('');

const background = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="b1" cx="85%" cy="5%" r="55%"><stop offset="0" stop-color="#c9d6ff" stop-opacity="0.9"/><stop offset="1" stop-color="#c9d6ff" stop-opacity="0"/></radialGradient>
    <radialGradient id="b2" cx="0%" cy="100%" r="55%"><stop offset="0" stop-color="#fde3b0" stop-opacity="0.9"/><stop offset="1" stop-color="#fde3b0" stop-opacity="0"/></radialGradient>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%"><stop offset="0.78" stop-color="${blue}" stop-opacity="0.28"/><stop offset="1" stop-color="${blue}" stop-opacity="0"/></radialGradient>
    <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${blue}"/><stop offset="0.5" stop-color="${gold}"/><stop offset="1" stop-color="${blue}"/></linearGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="rgba(20,33,61,0.12)"/></pattern>
  </defs>
  <rect width="100%" height="100%" fill="${paper}"/>
  <rect width="100%" height="100%" fill="url(#dots)"/>
  <rect width="100%" height="100%" fill="url(#b1)"/>
  <rect width="100%" height="100%" fill="url(#b2)"/>

  <circle cx="${cx}" cy="${cy}" r="${r + 60}" fill="url(#halo)"/>
  <circle cx="${cx}" cy="${cy}" r="${r + 22}" fill="none" stroke="${blue}" stroke-opacity="0.25" stroke-width="2"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff"/>
  <circle cx="${cx}" cy="${cy}" r="${r - 2.5}" fill="none" stroke="url(#rim)" stroke-width="5"/>

  <rect x="72" y="92" width="40" height="3" fill="${blue}"/>
  <text x="124" y="99" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="3" fill="${blue}">KUWAIT UNIVERSITY</text>
  <text x="72" y="178" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-style="italic" fill="${gold}">Dr.</text>
  <text x="68" y="268" font-family="Georgia, 'Times New Roman', serif" font-size="92" letter-spacing="-2" fill="${navy}">Salman</text>
  <text x="68" y="364" font-family="Georgia, 'Times New Roman', serif" font-size="92" letter-spacing="-2" fill="${navy}">Aljazzaf</text>
  <text x="72" y="420" font-family="Segoe UI, Arial, sans-serif" font-size="25" font-weight="600" fill="${navy}">Assistant Professor of Information Systems</text>
  <text x="72" y="450" font-family="Segoe UI, Arial, sans-serif" font-size="19" fill="#5b6475">College of Business Administration</text>
  ${tagSvg}
  <rect x="0" y="${H - 8}" width="${W}" height="8" fill="url(#rim)"/>
</svg>`;

// Portrait sized so the head sits in the circle and the shoulders run off the bottom edge
const portraitSize = 540;
const portrait = await sharp(cutout).resize(portraitSize, portraitSize).toBuffer();

await sharp(Buffer.from(background))
  .composite([{ input: portrait, left: Math.round(cx - portraitSize / 2), top: H - portraitSize + 12 }])
  .flatten({ background: paper })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(out('og-image.jpg'));

// ---------- Square portrait on white ----------
await sharp(cutout).resize(600, 600).flatten({ background: '#ffffff' }).jpeg({ quality: 88, mozjpeg: true }).toFile(out('portrait.jpg'));

// ---------- Icons ----------
const monogram = (size) =>
  Buffer.from(`<svg width="${size}" height="${size}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="${navy}"/>
    <text x="32" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#ffffff">SA</text>
  </svg>`);
await sharp(monogram(180)).png().toFile(out('apple-touch-icon.png'));
await sharp(Buffer.from(`<svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="${navy}"/>
    <text x="32" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#ffffff">SA</text>
  </svg>`)).png().toFile(out('favicon-32.png'));

console.log('Wrote og-image.jpg, portrait.jpg, apple-touch-icon.png, favicon-32.png to public/');
