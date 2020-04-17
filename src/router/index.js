import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home.vue');
const Category = () => import('../views/category/category.vue');
const Cart = () => import('../views/cart/cart.vue');
const Profile = () => import('../views/profile/profile.vue');

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Home',
    name: 'home',
    component: Home,
  }, {
    path: '/Category',
    name: 'category',
    component: Category,
  }, {
    path: '/Cart',
    name: 'cart',
    component: Cart,
  }, {
    path: '/Profile',
    name: 'profile',
    component: Profile,
  }]
})
