// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  app:{
    baseURL:'/Miao-Li-Han/',
    buildAssetsDir: '/static/'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
    ['@nuxtjs/google-fonts',{
      families:{
        'Inter':true
      }
    }]
    
  ],
  css: [
    "~/assets/global.css",
  ],
  plugins: [{ src: "@/plugins/aos.client.js", ssr: false, mode: "client" }],
})
