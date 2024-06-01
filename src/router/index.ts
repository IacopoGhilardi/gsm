import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cataloghi from '@/views/Cataloghi.vue'
import Contact from '@/views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chi-siamo',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cataloghi',
    name: 'catalogs',
    component: Cataloghi
  },
  {
    path: '/contatti',
    name: 'contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
