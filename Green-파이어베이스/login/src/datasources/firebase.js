// 파이어베이스 앱 객체 모듈 가져오기
// 파이어베이스 9버전이므로 아래와같이 /compat 를 함께 작성하여 사용
import firebase from 'firebase/compat/app';

// 파이어베이스 초기화

const oFirebase = firebase.initializeApp({
  apiKey: "AIzaSyCoLgdSnxrbKeb4ZBsW-WwPbLmw7ucaL0Y",
  authDomain: "login-d7de2.firebaseapp.com",
});

// 파이어베이스 인증 객체 모듈로 사용
export const oFirebaseAuth = oFirebase.auth();