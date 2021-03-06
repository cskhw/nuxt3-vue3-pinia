import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({    
  css: ['vuetify/lib/styles/main.sass'],
  build: {
      transpile: ['vuetify']
  },
  target: "static",
  ssr: false,
  vite: {
    define: {
      'process.env': {
        DEBUG: true
      }
    }
  }
});
