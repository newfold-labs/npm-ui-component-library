---
sidebar_position: 2
sidebar_label: Installation
---


# Install Newfold UI Library
To install the Newfold UI library, start with installing the package and its peer dependencies from NPM.

```shell
npm install @newfold/ui-component-library @wordpress/element
```

## Setup
This package assumes the use of tailwindcss for building CSS and therefore ships with Tailwind layered CSS. You can easily set up Tailwind using the `TAILWINDCSS_PRESET` module.

In your `tailwind.config.js`, make sure to import this module in your content configuration to prevent Tailwind from purging its styles like so:

```js
import { TAILWINDCSS_PRESET } from "@newfold/ui-component-library";

module.exports = {
    presets: [ TAILWINDCSS_PRESET ],
    content: [
        // Include all JS files inside the UI library in your content.
        ...TAILWINDCSS_PRESET.content,
        "./path/to/your/content/**/*.js",
    ],
};
```

To include this packages CSS in your build, import it in your stylesheet **before** the Tailwind layers like so:

```css
/* Import main CSS including all components. */
@import "@newfold/ui-component-library";

/* Tailwind layers */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now that your CSS is set up, you can start using the React components. Always start your React tree with the [`Root`](./components/root.mdx) component, which provides a context for general options and a CSS classname for scoping this libraries CSS. Without it, components in this library will not render properly.

```jsx
import { Root, Alert } from "@newfold/ui-component-library";

export default () => (
    <Root context={ { isRtl: false } }>
        <Alert variant="success">
            Congrats! You've successfully setup the UI library.
        </Alert>
    </Root>
);
```

Please note that the CSS scoping adds one level of CSS specificity. Therefore `TAILWINDCSS_PRESET` does the following:
1. Enables the `important` rule for all utilities.
2. Disables the Tailwind `preflight` styles (they are included in the [`Root`](./components/root.mdx) component's CSS).
3. Configures `@tailwindcss/forms` to use the `class` strategy (they are included in the [`Root`](./components/root.mdx) component's CSS).
