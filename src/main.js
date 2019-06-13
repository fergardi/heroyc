// imports
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueFire from 'vuefire'
import Vuesax from 'vuesax'
import VueI18n from 'vue-i18n'
import VueI18nFilter from 'vue-i18n-filter'
import { languages, defaultLocale } from './i18n/index.js'
import './workers/worker'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import 'animate.css/animate.min.css'
import 'rpg-awesome/css/rpg-awesome.min.css'
// colors
let wind = '#d8d8d8'
let earth = '#035129'
let lightning = '#7b0082'
let fire = '#6d0d0d'
let water = '#044d56'
// global css variables
document.documentElement.style.setProperty('--wind', wind)
document.documentElement.style.setProperty('--earth', earth)
document.documentElement.style.setProperty('--lightning', lightning)
document.documentElement.style.setProperty('--fire', fire)
document.documentElement.style.setProperty('--water', water)
// UI framework
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#5b3cc4',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)'
    }
  }
})
// filters
Vue.filter('number', (value) => {
  return value.toLocaleString('es')
})
// firebase
Vue.use(VueFire)
// i18n
Vue.use(VueI18n)
Vue.use(VueI18nFilter)
const messages = Object.assign(languages)
var i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'de',
  messages
})
// production
Vue.config.productionTip = false
// app
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
