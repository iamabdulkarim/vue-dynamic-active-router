import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contract from '@/components/Contract'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'About',
      component: About,
      alias: "/about"
    },
  
    {
      path: '/contract',
      name: 'Contract',
      component: Contract
    },
    {
      path: '/profile/:user_id',
      name: 'Profile',
      component: Profile
    }
  ]
})
