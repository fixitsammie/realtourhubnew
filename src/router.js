import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Profile'
Vue.use(Router)

//export default new Router({

let router = new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
        path: '/auth/login',
        name: 'login',
        component: Login,
        meta: {
            guest: true
        }
      },
      {
        path: '/auth/register',
        name: 'register',
        component: Register,
        meta: {
            guest: true
        }
      },
      {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,

      }

  ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'dashboard'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'dashboard'})
        }
    }else {
        next()
    }
})

export default router