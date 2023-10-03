import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/components/Header/HomePage.vue'
import AppCalculator from '@/components/Assignments_1_2/AppCalculator.vue'
import Form_Table from '@/components/Assignments_1_2/Form_Table.vue'
import PropParent from '@/components/Props/PropParent.vue'
import EmitsParent from '@/components/Emits/EmitsParent.vue'
import AppSlots from '@/components/Slots/AppSlots.vue'
import AppMadhu from '@/components/Slots/AppMadhu.vue'
import AppSanju from '@/components/Slots/AppSanju.vue'

import SlotLayout from '@/components/Slots/SlotLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/calc',
    name: 'calc',
    component: AppCalculator
  },
  {
    path: '/form-table',
    name: 'form-table',
    component: Form_Table
  },

  {
    path: '/props',
    name: 'props',
    component: PropParent
  },
 
  {
    path: '/emits',
    name: 'emits',
    component: EmitsParent
  },
  {
    path: '/slots',
    name: 'slots',
    component: AppSlots
  },
  {
    path: '/madhu',
    name: 'madhu',
    component: AppMadhu
  },
  {
    path: '/sanju',
    name: 'sanju',
    component: AppSanju
  },
  {
    path: '/layout',
    name: 'layout',
    component: SlotLayout
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
