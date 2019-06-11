import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/world' },
    { path: '/world', name: 'world', component: () => import('@/views/world.vue'), navbar: true, sidebar: true },
    { path: '/tavern', name: 'tavern', component: () => import('@/views/tavern.vue'), navbar: true, sidebar: true },
    { path: '/village', name: 'village', component: () => import('@/views/village.vue'), navbar: true, sidebar: true },
    { path: '/character', name: 'character', component: () => import('@/views/character.vue'), navbar: true, sidebar: true },
    { path: '/shop', name: 'shop', component: () => import('@/views/shop.vue'), navbar: true, sidebar: true },
    { path: '/dungeon', name: 'dungeon', component: () => import('@/views/dungeon.vue'), navbar: true, sidebar: true },
    { path: '/university', name: 'university', component: () => import('@/views/university.vue'), navbar: true, sidebar: true },
    { path: '/ladder', name: 'ladder', component: () => import('@/views/ladder.vue'), navbar: true, sidebar: true },
    { path: '*', redirect: '/' }
  ]
})
