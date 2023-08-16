// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Newfold UI',
  tagline: 'A React component library for building user interfaces',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://newfold-labs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/npm-ui-component-library/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'newfold-labs', // Usually your GitHub org/user name.
  projectName: 'npm-ui-component-library', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/newfold-labs/npm-ui-component-library/docs/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/newfoldui-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Newfold UI Logo',
          src: 'https://cdn.hiive.space/newfold/newfoldui.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: '/docs/category/components',
            label: 'Components',
            position: 'left',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/newfold-labs/npm-ui-component-library',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Elements',
                to: '/docs/category/elements',
              },
              {
                label: 'Components',
                to: '/docs/category/components',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Issues',
                href: 'https://github.com/newfold-labs/npm-ui-component-library/issues',
              },
              {
                label: 'Pull Requests',
                href: 'https://github.com/newfold-labs/npm-ui-component-library/pulls',
              },
              {
                label: 'Package',
                href: 'https://www.npmjs.com/package/@newfold/ui-component-library',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Docs',
                href: '/docs/intro',
              },
              // {
              //   label: 'Tutorials',
              //   href: '/blog/',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Newfold Digital Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
  plugins: [],
};

module.exports = config;
