module.exports = {
  title: 'Probabilistic shape model fitting',
  tagline: 'Online course',
  url: 'https://shapemodelling.cs.unibas.ch/probabilistic-fitting-course/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gravis-unibas', // Usually your GitHub org/user name.
  projectName: 'provabilistic-fitting-course', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PSM-Fitting Course',
      logo: {
        alt: 'Logo',
        src: 'img/face-favicon.jpg',
      },
      items: [
        /*{
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },*/
        {to: 'week1/week1', label: 'Week 1', position: 'left'},
        {to: 'week2/week2', label: 'Week 2', position: 'left'},
        {to: 'week3/week3', label: 'Week 3', position: 'left'},
        {to: 'week4/week4', label: 'Week 4', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*
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
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} University of Basel, Department of Mathematics and Computer Science`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
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
