// https://nuxt.com/docs/api/configuration/nuxt-config
//import { defineNuxtModule } from 'nuxt'
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/eslint-module",
    "@nuxt/ui",
    "nuxt-icons",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "vue3-carousel-nuxt"
  ],
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
    }
  },
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  googleFonts: {
    display: "swap",
    inject: true,
    download: true,
    families: {
        "Inter": [300, 400, 500, 600, 700],
        "Noto Sans": [300, 400, 500, 600, 700]
    }
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en-NG"],
    defaultLocale: "en-NG",
  },
  tailwindcss: {
    cssPath: "./assets/styles/tailwind.css",
    configPath: "./tailwind.config.js",
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  devServer: {
    host: "0.0.0.0",
    port: 5011,
  }
})