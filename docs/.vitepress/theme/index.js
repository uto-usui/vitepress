import DefaultTheme from 'vitepress/theme'
import Style from './Style.vue'

export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    app.component('Style', Style)
  },
}
