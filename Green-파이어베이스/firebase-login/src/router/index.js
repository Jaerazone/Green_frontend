import Vue from 'vue'
import VueRouter from 'vue-router'
import "@/datasources/firebase" // 2-3)

import { getAuth } from "firebase/auth" //2-3)
const auth = getAuth(); //2-3) auth인증객체를 통해 현재의 인증이 참인지 거짓인지 확인한다 다시 아래로 내려가삼

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
    },
    meta: { bAuth : true } // 2-1) main 페이지에 들어갈때마다 인증이 되어있는지 확인
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

// 2-1) main에 접근했을때 로그인이 되어있다면 main페이지로
// 로그인이 되어있지 않다면 login 페이지로 이동할 수 있게 네비게이션 가드 사용
// 라우트 메타필드를 확인해서 main 페이지에 접근한것을 확인
// 2-2)
router.beforeEach((to,from, next) => {
  console.log("네비게이션가드 확인");
  // 이동할 위치 (to-라우터객체-$router 혹은/router)가 main인지 확인
  // 편지와 같은 개념 to는 이동할위치의 라우터 / from은 현재위치의 라우터
  const bNeedAuth = to.matched.some( (record)=>record.meta.bAuth)
  // 2-3) 맨위로감 로그인이 되어있는지 확인한다 : 확인하기 위해서는 firebase의 인증이 필요함
  // 2-4) 현재의 인증이 참인지 거짓인지 확인하기 위해서
  const bCheckAuth = auth.currentUser;
  console.log("bNeedAuth:", bNeedAuth);
  console.log("bCheckAuth:", bCheckAuth);
  // main페이지 이면서 로그인이 되어있지 않다면 > login페이지로 이동
  // 그외에는 : 다른페이지로 이동, 로그인이 되어 있으면서 main로 이동할때는 > 그대로 이동만해줌(이때 사용할것이 next)
  if( bNeedAuth && !bCheckAuth ) {
    next('/login');
  } else {
    next();
  }
})

export default router
