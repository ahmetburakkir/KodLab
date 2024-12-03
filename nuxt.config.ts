// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-29',

  css: [
    'swiper/swiper-bundle.css', // Swiper CSS
    '@fortawesome/fontawesome-svg-core/styles.css', // Font Awesome CSS
  ],

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome', // Font Awesome Vue Bileşeni
    ],
  },
});
