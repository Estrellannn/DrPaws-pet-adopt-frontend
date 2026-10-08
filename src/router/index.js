import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Adopt from '../views/Adopt.vue'
import Story from '../views/Story.vue'
import Shop from '../views/Shop.vue'
import User from '../views/UserCenter.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/adopt', component: Adopt },
  { path: '/story', component: Story},
  { path: '/shop', component: Shop},
  { path: '/user', component: User},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router