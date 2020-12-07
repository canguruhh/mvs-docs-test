module.exports = {
  title: 'Metaverse',
  tagline: 'The new reality',
  url: 'https://canguruhh.github.io/',
  baseUrl: '/mvs-docs-test/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'canguruhh', // Usually your GitHub org/user name.
  projectName: 'canguruhh.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'Metaverse',
      logo: {
        alt: 'Metaverse Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/mvs-org/metaverse',
          label: 'GitHub',
          position: 'right',
        },
      ],
      style: 'dark'
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/metaverse',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/vxKw2ezb',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mvs_org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mvs-org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Metaverse Foundation.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mvs-org/metaverse/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
