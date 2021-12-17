// plugins/vuetify.ts
import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as Components from 'vuetify/components'

// Import everything
// import * as components from 'vuetify/components'

export default defineNuxtPlugin((nuxtApp) => {
   const vuetify = createVuetify({
       components: Components
   })
   nuxtApp.vueApp.use(vuetify)
})