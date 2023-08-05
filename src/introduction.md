# Newfold UI Components Library
The Newfold UI library is a React component library for building user interfaces. This Storybook provides an interactive overview of all available components and examples on how to use them.

## Important!
**These components are UI components only and should remain free from business logic, translations, implementation details and other non-general concepts.**

## Elements, components & patterns
To improve the flexibility and re-usability of this library its split into three layers: elements, components & patterns. Each layer adds upon the preceding layer in terms of complexity and specificity. The goal of this split is to provide the most useful interfaces for regular use cases, but to remain flexibile enough to handle edge case implementations that require a different structure. If, for instance, a component or pattern turns out to be too opinionated, you can always fall back to building with elements only without having to reinvent the wheel entirely.

### Elements
The elements layer contains the simplest and stupidest components. They are the smallest building blocks. They are opinionated, will hardly ever contain internal state and basically represent regular HTML elements with some added branding. Examples of elements are the `Button`, `Input` and `Title` components.

### Components
The components layer contains more complex and smarter components. They are probably the most used building blocks. They are a little opinionated, will sometimes contain internal state and represent regular use case components that group multiple elements together into a friendly interface. Examples of components are the `InputField` and other form field components, that provide an interface for adding labelling and error messaging to an input element.

### Patterns
The patterns layer contains example implementations of standardized element/component combinations. They are not actually components you can import and use in your code, but function more as a reference on how to work with the UI library to create rich interfaces. Examples of patterns could be `PageLayout` and `Header`, that combine multiple elements/components/plain HTML elements.
