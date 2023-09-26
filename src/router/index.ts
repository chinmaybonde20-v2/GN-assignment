import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutUs from '@/components/AboutUs.vue'
import AppCalc from '@/components/AppCalc.vue'
import FormList from '@/components/FormList.vue'
import OpenFormButton from '@/components/OpenFormButton.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUs
  },
  {
    path: '/calc',
    name: 'calc',
    component: AppCalc
  },
  {
    path: '/form-list',
    name: 'form-list',
    component: FormList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
