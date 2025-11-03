const TAILWIND_CONFIG = require('../src/presets/tailwindcss');

module.exports = {
	presets: TAILWIND_CONFIG,
	content: [
		'./**/*.js',
		'./cypress/**/*.{js,jsx,ts,tsx}',
		'./build/css/style.css',
	],
};