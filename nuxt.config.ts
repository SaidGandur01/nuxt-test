// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ],
      title: 'Draft project',
      link: [],
      style: [],
      script: [],
      noscript: []
    }
  },
  css: ['@/assets/css/base.css'],
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module'
  ],
  googleFonts: {
    families: {
      Poppins: {
        wght: [100,200,300,400,500,600,700,800]
      },
      Archivo: {
        wght: [100, 400, 500, 600, 700, 800]
      }
    }
  },
  devtools: { enabled: true }
})
