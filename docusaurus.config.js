module.exports = {
    title: 'Metaverse',
    tagline: 'The new reality',
    url: 'https://newdocs.mvs.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'canguruhh', // Usually your GitHub org/user name.
    projectName: 'mvs-docs-test', // Usually your repo name.
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
                    to: 'docs/get-wallet',
                    label: 'Get Wallet',
                    position: 'left',
                },
                {
                    to: 'docs/',
                    label: 'Documentation',
                    position: 'left',
                },
                {to: 'blog', label: 'News', position: 'left'},
                {
                    to: 'https://explorer.mvs.org',
                    label: 'Explorer',
                    position: 'right',
                }
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
                            label: 'User Guide',
                            to: 'docs/user',
                        },
                        {
                            label: 'Developer Guide',
                            to: 'docs/dev',
                        },
                        {
                            label: 'Admin Guide',
                            to: 'docs/admin',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Telegram',
                            href: 'https://t.me/Metaverse_Blockchain',
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
                    //editUrl:
                    //  'https://github.com/mvs-org/metaverse/edit/master/website/',
                },
                blog: {
                    showReadingTime: false,
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
