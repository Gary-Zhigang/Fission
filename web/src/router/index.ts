import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import InviteNew from '../components/invite-new.vue'
import FissionDA from '../components/fission-da.vue'
import MarketDA from '../components/market-da.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path:'/invite-new',
        component: InviteNew,
      },
      {
        path:'/fission-da',
        component: FissionDA,
      },
      {
        path:'/market-da',
        component: MarketDA,
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
