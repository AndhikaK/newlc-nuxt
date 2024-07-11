// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'LanguageCenter - University of Lampung',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: [
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
  ],

  fonts: {
    families: [{ name: 'Poppins', provider: 'google' }],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  compatibilityDate: '2024-07-11',
})