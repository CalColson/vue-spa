import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'

// Dynamic (lazy) loading
// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Category.vue')
// const NotFound = () => System.import('./theme/Category.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history', //Takes the hashtag out of the url
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({y: 0}),
  routes: [{
    path: '/',
    redirect: '/category/front-end'
  },
  {
    path: '/category/:id',
    name: 'category',
    component: Category
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    component: NotFound
  }]
})

export default router
