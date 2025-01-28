/* eslint-disable global-require */
const TAILWINDCSS_PRESET = {
	prefix: "nfd-",
	theme: {
		fontSize: {
			xxs: "0.675rem",
			xs: ".75rem",
			sm: ".8125rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
		},
		extend: {
			colors: {
				primary: {
					50: "#FEF5EF",
					100: "#FBD7C0",
					200: "#F9B890",
					300: "#F7A470",
					400: "#F37B31",
					500: "#F27121",
					600: "#F1650F",
					700: "#F25A21",
					800: "#F24F21",
					900: "#F24A22",
				},
			},
			strokeWidth: {
				3: "3px",
			},
		},
	},
	important: true,
	plugins: [
		require( "@tailwindcss/forms" )( {
			strategy: "class",
		} ),
		require( "@tailwindcss/container-queries" ),
	],
	corePlugins: {
		preflight: false,
	},
	content: [ "./node_modules/@newfold/ui-component-library/**/*.js" ],
};

export default TAILWINDCSS_PRESET;
