---
sidebar_position: 7
sidebar_label: Contribution Guide
---

# Contributing to Newfold UI Library

## Getting Started

The best way to begin working with Newfold UI locally is through our [starter templates](https://newfold-labs.github.io/npm-ui-component-library/docs/starters/):

1. [**ViteJS Template**](https://github.com/newfold-labs/npm-ui-component-library/tree/starter/vitejs): A branch with the UI Library pre-configured with ViteJS for standalone development
2. **[WordPress Plugin Template](https://github.com/newfold-labs/npm-ui-component-library/tree/starter/wp)**: A pre-packaged WordPress plugin with Newfold UI pre-configured with WP Scripts

We strongly recommend testing all new components in both WordPress and standalone environments to ensure cross-compatibility.

## Local Development Workflow

To connect your project to a local instance of the library for iterative development without requiring rebuilds, you can use any of these methods:

1. **NPM Link**: Use the [`npm link` command](https://docs.npmjs.com/cli/v9/commands/npm-link) to create a symbolic link
2. **Yalc** (Recommended): Use [Yalc](https://github.com/wclr/yalc) for more reliable package linking
3. **Alternative Package Proxies**: Any similar package proxy tool that fits your workflow

## Contribution Guidelines

All new components or feature updates must be submitted as Pull Requests and should include:

- A detailed description explaining the changes and their purpose
- Passing unit and integration tests
- Visual documentation (screenshots or videos) demonstrating the functionality within a WordPress dashboard environment
- Proper accessibility attributes and considerations
- Code that adheres to project styling and best practices

This contribution process ensures consistent quality and maintainability of the Newfold UI Library.
