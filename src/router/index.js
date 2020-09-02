import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Home = () => import('../views/tabbar/home/Home')
const Category = () => import('../views/tabbar/category/Category')
const Shopcart = () => import('../views/tabbar/shopcart/Shopcart')
const Profile = () => import('../views/tabbar/profile/Profile')

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
