/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import DateFnsAdapter from '@date-io/date-fns'
// import { id } from 'date-fns/locale'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  // date: {
  //   adapter: DateFnsAdapter,
  //   locale: id
  // },
  theme: {
    defaultTheme: 'dark',
  },
})
