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
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' },
      ],
      style: [],
      script: [
        {
          integrity: 'sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
          crossorigin: 'anonymous',
          referrerpolicy: "no-referrer",
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js',
          body: true
        },
      ],
      noscript: []
    }
  },
  css: [
    '@/assets/css/base.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-swiper'
  ],
  ssr: false,
  googleFonts: {
    families: {
      Poppins: {
        wght: [100,200,300,400,500,600,700,800]
      },
      Archivo: {
        wght: [100, 400, 500, 600, 700, 800]
      },
      Nunito: {
        wght: [100,200,300,400,500,600,700,800, 900]
      },
      Bellota_Text: {
        wght: [100,200,300,400,500,600,700,800, 900]
      }
    }
  },
  devtools: { enabled: false }
})
