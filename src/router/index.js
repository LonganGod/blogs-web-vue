import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home';
import About from '../views/about/about';
import Cate from '../views/cate/cate';
import Article from '../views/article/article';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'Home',
      path: '/home',
      meta: {
        title: '主页'
      },
      component: Home
    },
    {
      name: 'About',
      path: '/about',
      meta: {
        title: '关于我'
      },
      component: About
    },
    {
      name: 'Cate',
      path: '/cate',
      meta: {
        title: '文章分类'
      },
      component: Cate
    },
    {
      name: 'Article',
      path: '/article',
      meta: {
        title: '文章详情'
      },
      component: Article
    },
  ]
})

export default router
