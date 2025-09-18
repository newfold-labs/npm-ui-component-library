const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const outDir = path.join(ROOT, 'build');

function stripBuildPrefix(str) {
	return typeof str === 'string' ? str.replace(/^build\//, '') : str;
}

const out = {...pkg};

if (out.main) out.main = stripBuildPrefix(out.main);
if (out.style) out.style = stripBuildPrefix(out.style);

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

fs.writeFileSync(
	path.join(outDir, 'package.json'),
	JSON.stringify(out, null, 2) + '\n',
	'utf8'
);

const readme = path.join(ROOT, 'README.md');
if (fs.existsSync(readme)) {
	fs.copyFileSync(readme, path.join(outDir, 'README.md'));
}

console.log('✔ build/package.json ready');
