const path = require('path')

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

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
      })
    }

    // Solely to speed up Vuepress, if you need to debug your setup
    config.devtool = false

    // from .vuepress/config.js
    config.resolve.alias['@'] = path.join(__dirname)
    config.resolve.alias['@assets'] = path.join(__dirname, 'assets')
  },
}
