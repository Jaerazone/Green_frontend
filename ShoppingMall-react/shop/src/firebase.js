// 파이어베이스
import { initializeApp } from "firebase/app";
import {
  getAuth, // 인증
  // createUserWithEmailAndPassword, // user생성,회원가입(email,password)
  // updateProfile, // 프로필 업데이트(사진)
  // onAuthStateChanged,
  // signInWithEmailAndPassword, // 로그인(email,password)
  // signOut, // 로그아웃
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // firestore 사용

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyDK5VRswdpkPwO0INY2VFnnX2Rc9iTd2-M", // 인증 key
  //apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "boo-dog.firebaseapp.com",
  projectId: "boo-dog",
  storageBucket: "boo-dog.appspot.com",
  messagingSenderId: "937192423167",
  appId: "1:937192423167:web:8dbdc539eeeb9429b416ca",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// 이런식으로 쓰면 사용할 js파일에 import {db} from '~~firebase.js' 하면됨

export const auth = getAuth();
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
// 사용할 js파일에서 이렇게 사용하믄댐

// export {
//     createUserWithEmailAndPassword,
//     updateProfile,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     signOut,
// };
