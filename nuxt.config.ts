// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    // Simple usage
    '@nuxtjs/stylelint-module',
    '@nuxt/eslint',

    // With options
    [
      '@nuxtjs/stylelint-module',
      {
        /* module options */
      }
    ]
  ],

  eslint: {
    config: {
      stylistic: true // <---
    }
  }
})
