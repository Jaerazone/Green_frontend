import { createStore } from 'vuex'

// firebase 9버전사용
import "@/datasources/firebase"

import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup, 
  GoogleAuthProvider,
  signOut,

  
 } from "firebase/auth";
import router from '@/router';

const auth = getAuth();


export default createStore({
  state: {
    oUser : null // 사용자 정보를 담을 객체
  },
  getters: {
    fnGetUser(state) { // 사용자 객체를 반환
      return state.oUser;
    },
    fnGetAuthStatus(state) { // 사용자 객체 유무로 (로그인 & nav바 판단)
      return state.oUser != null;
    }
  },
  mutations: {
    fnSetUser(state, payload) {
      state.oUser = payload
    }
  },
  actions: {
    // firebase 인증 이용해서 이메일 회원생성 및 저장 (신규 사용자 가입)
    fnSingUser( {commit}, payload ) {
      createUserWithEmailAndPassword(auth, payload.pEmail, payload.pPassword)
      .then((pUserInfo) => {
        commit('fnSetUser', {
          email: pUserInfo.user.email,
          // 사용자 속성: 사용자가 이메일 주소와 비밀번호로 가입했다면, 기본 이메일 주소 속성만 채운다
        });
        router.push('/');
      })
      .catch((err) => {
        console.log(err.message);
      })
    },

    // firebase 인증을 이용해서 이메일 회원 로그인 (이메일 주소와 비밀번호로 사용자 로그인 처리)
    fnDoLogin ( {commit}, payload ) {
      signInWithEmailAndPassword(auth, payload.pEmail, payload.pPassword)
      .then((pUserInfo) => {
        commit('fnSetUser', {
          id : pUserInfo.user.uid,
          name : pUserInfo.user.displayName,
          email : pUserInfo.user.email,
          photoURL : pUserInfo.user.photoURL
        })
        router.push('/');
      })
      .catch((err) => {
        console.log(err.message);
      })
    },

    // firebase 구글 인증 (Google 로그인, 팝업모드)
    fnDoGoogleLogin_Popup({commit}) {
      const oProvider = new GoogleAuthProvider();
      oProvider.addScope('profile');
      oProvider.addScope('email');

      signInWithPopup(auth, oProvider)
      .then((pUserInfo) => {
        commit('fnSetUser', {
          id : pUserInfo.user.uid,
          name : pUserInfo.user.displayName,
          email : pUserInfo.user.email,
          photoURL : pUserInfo.user.photoURL
        })
        router.push('/');
      })
      .catch((err) => {
        console.log(err.message);
      })      
    },
    
    // 로그아웃
    fnSignOut({commit}) {
      signOut(auth)
      .then(() => {
        commit('fnSetUser', null)
        router.replace('/');
      })
      .catch((err) => {
        console.log(err.message);
      })
    }

  },
  modules: {
  }
})
