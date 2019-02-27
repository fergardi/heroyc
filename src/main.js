// imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import 'mapbox-gl/dist/mapbox-gl.css'

// UI framework
Vue.use(Vuesax)

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
