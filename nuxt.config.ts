// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image"],
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
    '/': { prerender: true }
  }
})