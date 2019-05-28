import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddBlog from './views/Add_blog.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'userhub',
          name: 'user_hub',
          component: () => import(/* webpackChunkName: "user_hub" */ './views/User_hub.vue')
        },
        {
          path: 'bloglist',
          name: 'blog_list',
          component: () => import(/* webpackChunkName: "blog_list" */ './views/Blog_list.vue')
        }
      ]
    },
    {
      path: '/addblog',
      name: 'add_blog',
      component: AddBlog
    }
  ]
})
