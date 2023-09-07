import { TAILWINDCSS_PRESET } from "@newfold/ui-component-library";

module.exports = {
    presets: [ TAILWINDCSS_PRESET ],
    content: [
        // Include all JS files inside the UI library in your content.
        ...TAILWINDCSS_PRESET.content,
        "./src/**/*.jsx",
    ],
};
