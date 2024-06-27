// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    // Simple usage
    '@nuxtjs/stylelint-module',
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/global.scss'],

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
