import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/world' },
    { path: '/world', name: 'world', component: () => import('@/app/views/world.vue'), navbar: true, sidebar: true },
    { path: '/tavern', name: 'tavern', component: () => import('@/app/views/tavern.vue'), navbar: true, sidebar: true },
    { path: '/village', name: 'village', component: () => import('@/app/views/village.vue'), navbar: true, sidebar: true },
    { path: '/character', name: 'character', component: () => import('@/app/views/character.vue'), navbar: true, sidebar: true },
    { path: '/shop', name: 'shop', component: () => import('@/app/views/shop.vue'), navbar: true, sidebar: true },
    { path: '/dungeon', name: 'dungeon', component: () => import('@/app/views/dungeon.vue'), navbar: true, sidebar: true },
    { path: '/university', name: 'university', component: () => import('@/app/views/university.vue'), navbar: true, sidebar: true },
    { path: '/ladder', name: 'ladder', component: () => import('@/app/views/ladder.vue'), navbar: true, sidebar: true },
    { path: '*', redirect: '/' }
  ]
})
