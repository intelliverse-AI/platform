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
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue'),
    children:[
      {
        path: 'challenges',
        name: 'Challenges',
        component: () => import(/* webpackChunkName: "challenges" */ '../views/dashboard/ChallengesView.vue'), 
      },
      {
        path: 'research-papers',
        name: 'ResearchPapers',
        component: () => import(/* webpackChunkName: "research-papers" */ '../views/dashboard/ResearchPapers.vue'), 
      },
      {
        path: 'forums',
        name: 'Forums',
        component: () => import(/* webpackChunkName: "forums" */ '../views/dashboard/DiscussionForums.vue'), 
      },
      {
        path: 'datasets',
        name: 'Datasets',
        component: () => import(/* webpackChunkName: "forums" */ '../views/dashboard/DatasetsView.vue'), 
      },
      {
        path: 'challenge/:id',
        name: 'SingleChallenge',
        component: () => import(/* webpackChunkName: "single challenge" */ '../views/dashboard/SingleChallenge.vue')
      },
      {
        path: 'paper/:id',
        name: 'SinglePaper',
        component: () => import(/* webpackChunkName: "single challenge" */ '../views/dashboard/SinglePaper.vue')
      },
    ]
  },
  {
    path: '/research-papers',
    name: 'ResearchPapers',
    component: () => import(/* webpackChunkName: "research papers" */ '../views/dashboard/ResearchPapers.vue')
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
  {
    path: '/partner-network',
    name: 'PartnerNetwork',
    component: () => import(/* webpackChunkName: "hackerthon" */ '../views/PartnerNetworkView.vue')
  },
  {
    path: '/hackathons',
    name: 'Hackerthon',
    component: () => import(/* webpackChunkName: "hackerthon" */ '../views/HackerthonView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
