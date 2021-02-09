module.exports = {
  base: process.env.VITEPRESS_BASE || '/',

  title: 'VitePress',
  description: 'VitePress test project',

  head: [],

  plugins: [],

  themeConfig: {
    repo: 'uto-usui/vitepress',
    docsDir: 'docs',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Basic',
        link: '/basic/',
      },
      {
        text: 'Information',
        link: '/info/',
      },
    ],
    sidebar: {
      '/basic/': [
        {
          text: 'basic',
          children: [{ text: 'vitepress basic', link: '/basic/' }],
        },
      ],
    },
    sidebarDepth: 3,
    editLinks: true,
    editLinkText: '✍🏻 edit?',
  },

  markdown: {
    lineNumbers: true,
    extendMarkdown(md) {
      md.options.linkify = true
    },
    toc: {
      containerHeaderHtml: '<strong>Table of Contents</strong>',
    },
  },
}
