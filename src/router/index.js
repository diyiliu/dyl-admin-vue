import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from '@/components/layout/DefaultLayout'
import Home from '@/components/pages/Home'
import Hello from '@/components/pages/HelloWorld'
import Other from '@/components/pages/Other'

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
      component: DefaultLayout,
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
      }]
    }
  ]
})
