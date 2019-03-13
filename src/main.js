// imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueFire from 'vuefire'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import 'mapbox-gl/dist/mapbox-gl.css'

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

Vue.filter('number', (value) => {
  return value.toLocaleString('es')
})

// firebase
Vue.use(VueFire)

// mapbox
window.mapboxgl = require('mapbox-gl')

// production
Vue.config.productionTip = false

// app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
