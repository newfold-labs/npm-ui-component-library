---
sidebar_position: 8
sidebar_label: Release Guide
---

# New Release Process
Our release process is automated using GitHub Actions to handle versioning and package publishing. Follow these steps to create a new release:

### 1. Prepare Your Changes
Ensure all pull requests intended for the release are merged into the `main` branch.

### 2. Initiate the Release
Navigate to the "[Prepare Release](https://github.com/newfold-labs/npm-ui-component-library/actions/workflows/prepare-release.yml)" GitHub Action and manually dispatch it. Select the appropriate version bump:

- **Patch** - Bug fixes and minor updates (1.0.0 → 1.0.1)
- **Minor** - New features that don't break existing functionality (1.0.0 → 1.1.0)  
- **Major** - Breaking changes (1.0.0 → 2.0.0)

### 3. Review and Merge the Release PR
The action will automatically create a pull request with version updates and changelog entries. Review the changes, approve, and merge this PR.

### 4. Create the GitHub Release
Create a new GitHub release using the same tag version that was generated in the automated PR. This will serve as the official release documentation.

### 5. Automatic NPM Publishing
Once the GitHub release is created, the [NPM Publish](https://github.com/newfold-labs/npm-ui-component-library/blob/main/.github/workflows/npm-publish.yml) action will automatically publish the new version to the NPM registry.
