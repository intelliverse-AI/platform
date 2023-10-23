import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/single-challenge',
    name: 'SingleChallenge',
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleChallenge.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboardView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
  {
    path: '/requestPartnership',
    name: 'RequestPartnership',
    component: () => import(/* webpackChunkName: "register" */ '../views/PartnerSignup.vue')
  },

  {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "register" */ '../views/EventsView.vue')
  },
  {
    path: '/ai-summit',
    name: 'Ai-Summit',
    component: () => import(/* webpackChunkName: "ai summit" */ '../views/AIsummit.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
