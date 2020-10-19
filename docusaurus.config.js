module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://mhalseyperry.github.io',
  baseUrl: '/vwl-docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'MHalseyPerry', // Usually your GitHub org/user name.
  projectName: 'vwl-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'VWL CMS Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },

        {
          title: 'Administrator Contact',
          items: [
            {
              label: 'Email',
              href: 'milo@intelligentwoundcare.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intelligent Wound Care Ltd. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
