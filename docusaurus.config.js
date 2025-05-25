module.exports = {
  title: 'Luogu Docs',
  tagline: 'Markdown自动渲染与GitHub Pages自动部署',
  url: 'https://your-github-username.github.io',
  baseUrl: '/luogu/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-github-username', // GitHub用户名
  projectName: 'luogu', // 仓库名
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};