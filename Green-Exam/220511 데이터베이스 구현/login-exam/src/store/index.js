import Vue from 'vue'
import Vuex from 'vuex'

import "@/datasources/firebase"

Vue.use(Vuex)

import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  deleteUser,
    
 } from "firebase/auth";
import router from '@/router';

const auth = getAuth();


export default new Vuex.Store({
  state: {
    oUser:null // 사용자 정보를 담을 객체
  },
  getters: {
    // 사용자 객체를 반환
    fnGetUser(state) {
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
    /* 비밀번호가 있는 신규 사용자 계정을 만들려면 다음절차가 필요함
      1. 사용자가 앱의 가입 양식을 사용해 가입하고 나면 필요에 따라 앱에서 계정 유효성 검사 절차를 완료함
        검사 항목의 예시로는 신규 계정의 비밀전호를 정확하게 입력했는지, 
        비밀번호가 복잡성 조건을 충족하는지 등이 있음
      2. 다음과 같이 신규 사용자 이메일주소와, 비밀번호를 createUserWithEmailAndPassword에 전달해 신규계정 생성
        신규 계정 성공하면 사용자가 자동으로 로그인된다
      3. 다음단계!!  사용자가 처음으로 로그인하면 신규 사용자 계정이 생성되고 사용자가 로그인 할때 
        사용한 사용자 인증 정보(사용자 이름, 비밀번호, 전화번호 또는 인증 제공업체 정보)에 연결된다
        이 신규 계정은 Firebase 프로젝트에 저장되고, 사용자의 로그인 방법과 무관하게 프로젝트 내의
        모든 앱에서 사용자 본인 확인에 사용할 수 있다
      */
     // firebase 인증을 이용해서 이메일 회원생성 및 저장(신규 사용자 가입)
    fnRegisterUser( {commit}, payload ) { // commit을 통해 받아온 값을 payload를 통해 user에 전달
      createUserWithEmailAndPassword(auth, payload.pEmail, payload.pPassword) // auth, payload.이메일,패스워스 들고옴
      .then((pUserInfo) => { // 들고와서 pUserInfo에 넣어주고 이 신규회원정보를 store에 저장하기위해 commit을 이용
        commit('fnSetUser', {
          email: pUserInfo.user.email,
          // 사용자 속성: 사용자가 이메일 주소와 비밀번호로 가입했다면, 기본 이메일 주소 속성만 채운다
        });
        router.push('/main');
      })
      .catch((err) =>{
        console.log(err.message);
      });
    },
    
    // firebase 인증을 이용해서 이메일 회원 로그인 (이메일 주소와 비밀번호로 사용자 로그인 처리)
    /* 비밀번호로 사용자 로그인 처리하는 절차는 신규 계정을 생성하는 절차와 비슷함
      1. 사용자가 앱에 로그인하면 사용자의 이메일주소와 비밀번호를 signInWithEmailAndPassword 에 전달
    */
    fnDoLogin( {commit}, payload) {
      signInWithEmailAndPassword(auth, payload.pEmail, payload.pPassword)
      .then((pUserInfo) => {
        commit('fnSetUser', { // commit을 통해 받아온 정보를 저장해준다
          id : pUserInfo.user.uid,
          name : pUserInfo.user.displayName,
          email : pUserInfo.user.email,
          photoURL : pUserInfo.user.photoURL
        })
        router.push('/main'); // 저장 후 메인으로 이동
      })
      .catch( (err) => {
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
        commit('fnSetUser', { // commit을 통해 받아온 정보를 저장해준다
          id : pUserInfo.user.uid,
          name : pUserInfo.user.displayName,
          email : pUserInfo.user.email,
          photoURL : pUserInfo.user.photoURL
        })
        router.push('/main'); // 저장 후 메인으로 이동
      })
      .catch( (err) => {
        console.log(err.message);
      })
    },

    // 로그아웃
    fnDoLogout({commit}) {
      signOut(auth)
      .then(()=> {
        commit('fnSetUser', null);
        router.push('/');
      })
      .catch((err) => {
        console.log(err.message);
      });  
    },

    // 회원탈퇴
    fnDoDelete({commit}) {
      const user = auth.currentUser;
      deleteUser(user)
      .then(() => {
        commit('fnSetUser', null)
        router.push('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  },
  modules: {
  }
})
