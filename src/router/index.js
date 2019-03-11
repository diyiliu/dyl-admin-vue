import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from '@/components/layout/DefaultLayout'
import Home from '@/components/pages/Home'
import Hello from '@/components/pages/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'admin'
    },
    {
      path: '/admin',
      component: DefaultLayout,
      name: '',
      children: [{
        path: '',
        name: 'home',
        component: Home,
        meta: [],
      },{
        path: '/hello',
        name: 'hello',
        component: Hello,
        meta: ['添加数据', '添加商铺'],
      }]
    }
  ]
})
