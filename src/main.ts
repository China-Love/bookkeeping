import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/*components*/ 
import Nav from '@/views/Nav.vue'
import TabSlot from '@/views/TabSlot.vue'
import SvgIcon from '@/views/SvgIcon.vue'


createApp(App)
.use(store)
.use(router)
.component("Nav",Nav)
.component("TabSlot",TabSlot)
.component("SvgIcon",SvgIcon)
.mount('#app')
