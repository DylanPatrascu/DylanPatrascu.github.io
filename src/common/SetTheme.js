import { calcAPCA } from "apca-w3";

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  const bigint = parseInt(hex, 16);
  return [
    (bigint >> 16) & 255,
    (bigint >> 8) & 255,
    bigint & 255,
  ];
}

function rgbToHex([r, g, b]) {
  return `#${[r, g, b].map(c => c.toString(16).padStart(2, '0')).join("")}`;
}

function rgbToHsl([r, g, b]) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max){
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [Math.round(h*360), Math.round(s*100), Math.round(l*100)];
}

function hslToRgb([h, s, l]) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2*l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c/2;
  let r=0, g=0, b=0;

  if (h < 60)      [r,g,b] = [c,x,0];
  else if (h < 120)[r,g,b] = [x,c,0];
  else if (h < 180)[r,g,b] = [0,c,x];
  else if (h < 240)[r,g,b] = [0,x,c];
  else if (h < 300)[r,g,b] = [x,0,c];
  else             [r,g,b] = [c,0,x];

  return [r,g,b].map(v => Math.round((v + m) * 255));
}

function lightenHexColor(hex, amount = 20) {
  const hsl = rgbToHsl(hexToRgb(hex));
  hsl[2] = Math.min(100, hsl[2] + amount);
  return rgbToHex(hslToRgb(hsl));
}

function generateReadablePair() {
  let bg, fg, contrast;
  let tries = 0;
  const maxTries = 30;

  do {
    bg = randomColor();
    fg = randomColor();
    contrast = Math.abs(calcAPCA(fg, bg));
    tries++;
  } while (contrast < 60 && tries < maxTries);

  if (tries === maxTries) {
    console.warn("Could not find a high-contrast pair. Using fallback.");
    bg = "#654321";
    fg = "#e0ffe0";
  }

  return { bg, fg };
}

function randomColor() {
  const r = () => Math.floor(Math.random() * 256);
  return `#${r().toString(16).padStart(2, '0')}${r().toString(16).padStart(2, '0')}${r().toString(16).padStart(2, '0')}`;
}

function setThemeVars() {
  const { bg, fg } = generateReadablePair();
  const hover = lightenHexColor(bg, 20);

  document.documentElement.style.setProperty("--background-color", bg);
  document.documentElement.style.setProperty("--text-color", fg);
  document.documentElement.style.setProperty("--extra-color", fg);
  document.documentElement.style.setProperty("--hover-color", hover);

  console.log(`Theme set:
  • Background: ${bg}
  • Text: ${fg}
  • Hover: ${hover}`);
}

export default setThemeVars;
