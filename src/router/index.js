import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/home'
import About from './about/about';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...Home,
    ...About
  ]
})

export default router