// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  css: [
    "~/assets/global.css",
  ],
  plugins: [{ src: "@/plugins/aos.client.js", ssr: false, mode: "client" }],
})
