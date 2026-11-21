export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,

  // Настройки для GitHub Pages
  app: {
    baseURL: '/zadacha/', 
    buildAssetsDir: 'assets'
  }
})