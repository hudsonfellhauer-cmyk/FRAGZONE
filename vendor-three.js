// Optional: after `npm install`, copies three.js into public/vendor and points index.html at it,
// so the game no longer depends on the cdnjs CDN.
const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'three', 'build', 'three.min.js');
const dir = path.join(__dirname, '..', 'public', 'vendor');
const html = path.join(__dirname, '..', 'public', 'index.html');
if (!fs.existsSync(src)) { console.error('Run "npm install" first.'); process.exit(1); }
fs.mkdirSync(dir, { recursive: true });
fs.copyFileSync(src, path.join(dir, 'three.min.js'));
let s = fs.readFileSync(html, 'utf8');
s = s.replace('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', 'vendor/three.min.js');
fs.writeFileSync(html, s);
console.log('three.js vendored to public/vendor/three.min.js');
