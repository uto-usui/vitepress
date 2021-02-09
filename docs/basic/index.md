---
title: Basic
---

# Basic

[[TOC]]

## Links

* [🐱 VitePress](https://github.com/vuejs/vitepress)
* [📚 VitePress Docs](https://vitepress.vuejs.org/)

## News

* 2020-11-20 release

## Directory

```bath{5}
- .vitepress/        for VuePress
    - components/   called components to md files 
    - theme/        site theme files
    - config.js     config file
- public/           static files
- index.md          page
```

## Tips

### Container

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

```js{2}
console.log('Hello world')
console.log('This is custom container')
```

## Using Vue components in Markdown

```js
<Test />

<script setup>
  import Test from '../.vitepress/components/Test.vue'
</script>
```
