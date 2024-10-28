// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Arthur Chabon Architects',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://use.typekit.net/ibd2fft.css' },
      ],
    },
  },

  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image", '@vueuse/motion/nuxt'],

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/izzee/image/upload/'
    }
  },

  css: [
    '~/assets/main.scss',
    '~/assets/type.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_variables.scss" as *;',
        },
      },
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/contact': { prerender: true }
  },

  compatibilityDate: '2024-10-28'
})