import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about', component: AboutView
  },
  {
    path: '/quotes', name: 'quotes', component: () => import('../views/RandomQuoteView.vue')
  },
  {
    path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue')
  },
  {
    path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue')
  }  

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
