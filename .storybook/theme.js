import { create } from "@storybook/theming";
import tailwindConfig from "../tailwind.config";

const theme = tailwindConfig.presets[ 0 ].theme;

export default create( {
	base: "light",
	brandTitle: "Newfold Digital UI Components",
	brandUrl: "https://github.com/newfold-labs/npm-ui-components",
	brandImage: "https://cdn.hiive.space/newfold/logo-newfold-modern.svg",

	colorPrimary: "#F27121",
	colorSecondary: "#F27121",

	// UI
	appBg: "#F1F5F9",
	appContentBg: "#ffffff",
	// appBorderColor: "grey",
	// appBorderRadius: 4,

	// Typography
	// fontBase: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif",
	// fontCode: "monospace",

	// Text colors
	// textColor: "black",
	// textInverseColor: "rgba(255,255,255,0.9)",

	// Toolbar default and active colors
	// barTextColor: "silver",
	barSelectedColor: "#F1650F",
	// barBg: "hotpink",

	// Form colors
	// inputBg: "white",
	// inputBorder: "silver",
	// inputTextColor: "black",
	// inputBorderRadius: 4,
} );
