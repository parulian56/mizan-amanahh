// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/asset/main.css"], // ✅ masukin CSS global kamu

  vite: {
    plugins: [
      tailwindcss(), // ✅ plugin tailwind
    ],
  },
})
