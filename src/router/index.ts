import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Tally from '@/views/Tally.vue'
import Tag from '@/views/Tag.vue'
import Statistics from '@/views/Statistics.vue';
import Notfound from '@/views/Notfound.vue'
import Income from '@/components/tally/Income.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/tally'
  },
  {
    path:'/tally',
    name:'tally',
    component: Tally
  },
  {
    path:'/tag',
    name:'tag',
    component:Tag
  },
  {
    path:'/statistics',
    name:'statistics',
    component:Statistics
  },
  {
    path:'/income',
    name:'income',
    component:Income
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
