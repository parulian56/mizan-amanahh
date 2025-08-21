// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"], // pastikan foldernya benar (assets, bukan asset)

  modules: [
    "@nuxtjs/tailwindcss", // ✅ cara resmi integrasi tailwind di Nuxt
  ],
})
