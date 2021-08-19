import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Tally from '@/views/Tally.vue'
import Tag from '@/views/Tag.vue'
import Statistics from '@/views/Statistics.vue';
import Notfound from '@/views/Notfound.vue'
import Income from '@/components/tally/Income.vue'
import Labels from '@/components/tally/Labels.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/tally/labels'
  },
  {
    path:'/tally',
    component: Tally,
    children:[
      {
        path:'income',
        component:Income
      },
      {
        path:'labels',
        component:Labels
      },
    ]
  },
  {
    path:'/tag',
    component:Tag
  },
  {
    path:'/statistics',
    component:Statistics
  },
  {
    path:'/:pathMatch(.*)*',
    component:Notfound
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
