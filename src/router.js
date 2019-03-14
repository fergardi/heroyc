import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/world' },
    { path: '/world', name: 'world', component: () => import('./views/world.vue') },
    { path: '/tavern', name: 'tavern', component: () => import('./views/tavern.vue') },
    { path: '/character', name: 'character', component: () => import('./views/character.vue') },
    { path: '/shop', name: 'shop', component: () => import('./views/shop.vue') },
    { path: '/dungeon', name: 'dungeon', component: () => import('./views/dungeon.vue') },
    { path: '*', redirect: '/' }
  ]
})
