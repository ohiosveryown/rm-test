// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxthq/studio", "@nuxt/content"],

  content: {
    // ... options
  },
})
