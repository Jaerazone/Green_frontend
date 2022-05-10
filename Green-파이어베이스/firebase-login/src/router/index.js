import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  { // 1-10) 라우터 주소 수정 -> 다시 App.vue
    path: '/',
    name: 'home',
    component: function () {
      return import('../components/StartPage.vue')
    }
  },
  { // 1-17) main, login, register 연결
    path: '/main',
    name: 'main',
    component: function () {
      return import('../components/MainPage.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../components/LoginPage.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../components/RegisterPage.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
