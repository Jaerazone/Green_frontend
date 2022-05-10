import Vue from 'vue'
import Vuex from 'vuex'
// 1-2) 초기화한 파이어베이스 불러옴 
// -> firebase 사이트에서 인증들어가서, 이메일비번 허용, 구글추가하기
// 인증 -> 소개 -> Firebase SDK 인증-> 이메일 및 비밀번호 기반 인증 -> 웹
import "@/datasources/firebase"
// 1-3) 사이트에서 들고옴
// 9버전을 사용한 방법
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup, 
  GoogleAuthProvider
 }  from "firebase/auth";

import router from '@/router'; // router.push('/') 이거 작성하면 저절로 생기나봄
// 파이어베이스 인증을 위한 객체
const auth = getAuth();

Vue.use(Vuex)

// 1-4) Store 채우기
export default new Vuex.Store({
  state: {
    oUser:null // 사용자 정보를 담을 객체
  },
  getters: {
    // 사용자 객체 반환
    fnGetUser(state) {
      return state.oUser;
    },
    // 사용자 객체값의 유무로 로그인 여부 판단
    fnGetAuthStatus(state) {
      return state.oUser != null;
    }
  },
  mutations: {
    fnSetUser(state, payload) {
      state.oUser = payload
    }
  },
  actions: {
    // 1-5) 파이어 베이스의 인증을 이용하여 이메일회원생성 및 저장 (신규 사용자 가입)
    // commit을 통해서 받아온 값을 payload를 통해 user쪽에 전달
    fnRegisterUser( {commit}, payload ) {
      createUserWithEmailAndPassword(auth, payload.pEmail, payload.pPassword) // 인증과, payload이메일과 패스워드를 들고옴
      .then((pUserInfo) => { //윗내용을 가져왔다면 (pUserInfo 이름으로 들고옴)
        // 신규회원 정보를 store에 저장할수있도록한다 저장하기위해 commit을 이용
        commit('fnSetUser', {
          email: pUserInfo.user.email,
        });
        router.push('/main');
      })
      .catch((err) =>{
        console.log(err.message);
      });
    },

    //1-6) 파이어베이스의 인증을 이용하여 이메일 회원 로그인 (이메일주소와 비밀번호로 사용자 로그인 처리)
    DoLogin( {commit} , payload) {
      signInWithEmailAndPassword(auth, payload.pEmail, payload.pPassword)
      .then((pUserInfo) => {
        commit('fnSetUser', { // commit을 통해 받아온 정보를 저장해 준다
          id : pUserInfo.user.uid,
          name : pUserInfo.user.displayName,
          email : pUserInfo.user.email,
          photoURL : pUserInfo.user.photoURL
        }); // 저장해주었다면 로그인완료! /main으로 이동
        router.push('/main');
      })
      .catch((err) => {
        console.log(err.message);
      })
    },

    // 1-7) 파이어베이스 구글 인증 (Google 로그인 , 팝업모드)
    fnDoGoogleLogin_Popup({commit}) {
      /*      1.signInWithPopup, GoogleAuthProvider  // import 해주고
      2. GoogleAuthProvider 객체 만들어줘야함
      3.provider.addScope('https://www.googleapis.com/auth/contacts.readonly'); //필요한 값을 들고오고
      4.      */


      const oProvider = new GoogleAuthProvider();
      oProvider.addScope("profile");
      oProvider.addScope("email");
      
      signInWithPopup(auth, oProvider)
      .then((pUserInfo) => {
        commit('fnSetUser', {
          id : pUserInfo.user.uid,
          name : pUserInfo.user.displayName,
          email : pUserInfo.user.email,
          photoURL : pUserInfo.user.photoURL
        });
        router.push('/main');
      })
      .catch((err) => {
        console.log(err.message);
      }); // ->1-10) App.vue 라우터설정
    }
  },
  modules: {
  }
})
