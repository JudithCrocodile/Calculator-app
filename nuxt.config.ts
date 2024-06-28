// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    // Simple usage
    '@nuxtjs/stylelint-module',
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/global.scss', '~/assets/css/theme/theme1.scss'],

  eslint: {
    config: {
      stylistic: true // <---
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
