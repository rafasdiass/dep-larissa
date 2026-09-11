import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
const read = (path) => readFileSync(resolve(path), 'utf8');
function luminance(hex) {
  const channels = hex.replace('#','').match(/../g).map((v) => parseInt(v,16)/255);
  return channels.map((v) => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((n, v, i) => n + v * [.2126, .7152, .0722][i], 0);
}
const contrast = (a,b) => (Math.max(luminance(a), luminance(b))+.05)/(Math.min(luminance(a),luminance(b))+.05);
describe('Stylesheet and asset regression safeguards', () => {
  it('loads Bootstrap components and the icon font, not just the grid', () => {
    expect(read('src/styles/main.scss')).toContain("@import 'bootstrap/scss/bootstrap'");
    expect(read('src/main.jsx')).toContain("import 'bootstrap-icons/font/bootstrap-icons.css'");
  });
  it('ships locally hosted fonts including Portuguese glyph subsets', () => {
    const fonts = read('src/styles/tokens/_fonts.scss');
    expect(fonts).toContain('Barlow Condensed');
    expect(fonts).toContain('Inter');
    expect(fonts).not.toContain('https://');
    for (const [,url] of fonts.matchAll(/url\(([^)]+)\)/g)) expect(existsSync(resolve('public', url.slice(1)))).toBe(true);
    expect(fonts).toContain('U+0000-00FF');
  });
  it('provides explicit mobile/tablet navigation and a stacked mobile layout', () => {
    const header = read('src/styles/components/_header.scss');
    const hero = read('src/styles/components/_hero.scss');
    const sections = read('src/styles/components/_home-sections.scss');
    expect(header).toMatch(/max-width: 1023px[^}]+header-nav \{ display: none/s);
    expect(hero).toContain('@media (max-width: 767px)');
    expect(sections).toContain('grid-template-columns: 1fr;');
    expect(read('src/styles/main.scss')).toContain('prefers-reduced-motion: reduce');
  });
  it('keeps primary text and button color pairs readable', () => {
    const colors = read('src/styles/tokens/_colors.scss');
    for (const [foreground, background] of [['#242024','#fffaf7'], ['#60575c','#fffaf7'], ['#d5c8d0','#201b20']]) {
      expect(colors).toContain(foreground); expect(colors).toContain(background);
      expect(contrast(foreground, background)).toBeGreaterThanOrEqual(4.5);
    }
    expect(contrast('#ffffff','#c9006d')).toBeGreaterThanOrEqual(4.5);
    expect(contrast('#bc0068','#e0e0df')).toBeGreaterThanOrEqual(3);
  });
});
