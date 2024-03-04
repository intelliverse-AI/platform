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
    redirect:'/dashboard/research-papers',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue'),
    children:[
      {
        path: 'hub',
        name: 'Hub',
        component: () => import(/* webpackChunkName: "hub" */ '../views/dashboard/MyHub.vue'), 
        children:[
          {
            path: 'startProject',
            name: 'StartProject',
            component: () => import(/* webpackChunkName: "start project" */ '../views/dashboard/myhub/StartProject.vue'), 
          },
          {
            path: 'overview',
            name: 'Overview',
            component: () => import(/* webpackChunkName: "overview" */ '../views/dashboard/myhub/HubOverview.vue'), 
          },
          {
            path: 'publish',
            name: 'Datasets',
            component: () => import(/* webpackChunkName: "publish paper" */ '../views/dashboard/myhub/PublishPaper.vue'), 
          },

        ]
      },
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
        path: 'uploadDataset',
        name: 'UploadDataset',
        component: () => import(/* webpackChunkName: "upload dataset" */ '../views/dashboard/myhub/UploadDataset.vue'), 
      },
      {
        path: 'getLicence',
        name: 'GetLicense',
        component: () => import(/* webpackChunkName: "get license" */ '../views/dashboard/GetLicense.vue'), 
      },
      {
        path: 'licenses',
        name: 'Licenses',
        component: () => import(/* webpackChunkName: "licenses" */ '../views/dashboard/LicensesView.vue'), 
      },
      {
        path: 'tools',
        name: 'Tools',
        component: () => import(/* webpackChunkName: "licenses" */ '../views/dashboard/ToolsView.vue'), 
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
    component: () => import(/* webpackChunkName: "events" */ '../views/EventsView.vue')
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
