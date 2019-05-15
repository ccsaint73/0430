import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js-cookie'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('@/pages/home')
    },
    {
    	path: '/detail/:id',
    	component: ()=>import('@/pages/detail')
    },
    {
    	path: '/login',
    	component: ()=>import('@/pages/login')
    }
  ]
})

router.beforeEach((to, from, next)=>{
	var token = Cookie.get('token');

	if(typeof token === "undefined" || token === ""){
		if(to.path === "/login"){
			next();
		}else {
			next('/login')
		}
	}else {
		next();
	}
	
})

export default router;