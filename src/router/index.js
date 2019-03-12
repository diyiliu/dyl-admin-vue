import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '@/components/layout/AppLayout'
import Home from '@/components/pages/Home'
import Hello from '@/components/pages/HelloWorld'
import Other from '@/components/pages/Other'
import Menu1 from '@/components/pages/Menu1'
import Menu2 from '@/components/pages/Menu2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/admin/home'
    },
    {
      path: '/admin',
      component: AppLayout,
      redirect: '/admin/home',
      children: [{
        path: 'home',
        name: 'home',
        component: Home,
        meta: [],
      },{
        path: 'hello',
        name: 'hello',
        component: Hello,
        meta: [],
      },{
        path: 'other',
        name: 'other',
        component: Other,
        meta: [],
      },{
        path: 'menu1',
        name: 'menu1',
        component: Menu1,
        meta: [],
      },{
        path: 'menu2',
        name: 'menu2',
        component: Menu2,
        meta: [],
      }]
    }
  ]
})
