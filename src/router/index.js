import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/home'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...Home
  ]
})

export default router