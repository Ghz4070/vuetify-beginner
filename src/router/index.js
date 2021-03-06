import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../components/NotFound.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/reglage',
    name: 'Setting',
    component: () => import('../views/Settings.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/blog/accueil',
    name: 'BlogAccueil',
    component: () => import('../views/blog/BlogAccueil.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/blog/display-cards',
    name: 'DisplayCards',
    component: () => import('../views/blog/DisplayCards.vue'),
    meta: { transition: 'fade-in-right' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
