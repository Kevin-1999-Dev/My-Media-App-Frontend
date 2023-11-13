import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/homePage',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/newsDetails',
    name: 'details',
    component: () => import('../views/NewsDetails.vue')
  },
  {
    path: '/',
    name: 'loginPage',
    component: () => import('../views/LoginPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
