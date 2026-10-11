import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Adopt from '../views/Adopt.vue'
import Story from '../views/Story.vue'
import Shop from '../views/Shop.vue'
import User from '../views/UserCenter.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Info from '../views/Info.vue'
import ChangePwd from '../views/ChangePwd.vue'
import AdoptApply from '../views/AdoptApply.vue'
import MyPublish from '../views/MyPublish.vue'
import Service from '../views/Service.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/adopt', component: Adopt },
  { path: '/story', component: Story},
  { path: '/shop', component: Shop},
  { path: '/user', component: User,
  redirect:'/user/info',
  children:[
	  {path:'info',component:Info},
	  {path:'changepwd',component:ChangePwd},
	  {path:'adoptapply',component:AdoptApply},
	  {path:'mypublish',component:MyPublish},
	  {path:'service',component:Service}
  ]},
  { path: '/login',component:Login, meta:{hideLayout:true}},
  { path: '/register',component:Register, meta:{hideLayout:true}}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to,from,next) => {
	const token=localStorage.getItem('token')
	const whiteList=['/','/login','/register']
	if(whiteList.includes(to.path)){
		next()
	}else{
		if(token){
			next()
		}else{
			next('/login')
		}
	}
})

export default router