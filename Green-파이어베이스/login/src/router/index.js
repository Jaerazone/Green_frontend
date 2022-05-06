import Vue from 'vue'
import VueRouter from 'vue-router'
//import StartPage from '../components/StartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    //component: StartPage
    //3,11줄을 합쳐서 이렇게 한줄로 적을 수 있다
    component : () => import("@/components/StartPage.vue")
  },
  {
    path: '/login',
    name: 'LoginPage',
    component : () => import("@/components/LoginPage.vue")
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component : () => import("@/components/RegisterPage.vue")
  },
  {
    path: '/main',
    name: 'MainPage',
    component : () => import("@/components/MainPage.vue")
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
