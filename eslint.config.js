const yoastConfig = require('@yoast/eslint-config');

module.exports = {
	...yoastConfig,
	parser: "@babel/eslint-parser",
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module",
		requireConfigFile: false,
		babelOptions: {
			presets: ["@wordpress/babel-preset-default"],
		},
	},
	plugins: [
		...yoastConfig.plugins || [],
		"@babel",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		...yoastConfig.rules || {},
		// We use 'wp.element.createElement' instead of the 'react' package directly.
		"react/react-in-jsx-scope": "off",
		"no-restricted-imports": [
			"error",
			{
				name: "@wordpress/element",
				message: "Please use react instead. This project no longer uses the @wordpress/element package.",
			},
		],
		"no-unused-expressions": [
			"error",
			{
				allowShortCircuit: true,
				allowTernary: true,
			},
		],
		"max-len": [
			"error",
			{
				code: 150,
				ignoreStrings: true,
				ignorePattern: "[\t]*<path [\\w\\W]*/>\n",
			},
		],
		"space-unary-ops": [
			"error",
			{
				words: true,
				nonwords: false,
				overrides: {
					"!": true,
					"!!": true,
				},
			},
		],
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "always",
			},
		],
		"template-curly-spacing": [
			"error",
			"always",
		],
	},
	overrides: [
		{
			files: ["src/**/*.stories.js", "src/**/stories.js"],
			rules: {
				"no-unused-vars": "off",
				"require-jsdoc": "off",
				"valid-jsdoc": "off",
				"react/prop-types": "off",
			},
		},
	],
};
