import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
  
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/sign',
    name: 'SingView',

    component: function () {
      return import('../views/SingView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
  
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/order',
    name: 'order',
  
    component: function () {
      return import('../views/OrderView.vue')
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
