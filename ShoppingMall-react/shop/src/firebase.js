// 파이어베이스
// import firebase from "firebase/compat/app";
// //import "firebase/firestore";
// import "firebase/compat/auth"; // 인증기능
// import "firebase/compat/firestore"; // 데이터베이스 기능
// //import "firebaseInstance/compat/storage"; // 스토리지 기능, compat 추가함

import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyDK5VRswdpkPwO0INY2VFnnX2Rc9iTd2-M",
    authDomain: "boo-dog.firebaseapp.com",
    projectId: "boo-dog",
    storageBucket: "boo-dog.appspot.com",
    messagingSenderId: "937192423167",
    appId: "1:937192423167:web:8dbdc539eeeb9429b416ca",
};
initializeApp(firebaseConfig);
//init services
const auth = getAuth();
export {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
};

//export const app = initializeApp(firebaseConfig);

// firebaseConfig 정보로 firebase 시작
//export default firebase.initializeApp(firebaseConfig);

// // firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();

// // 필요한 곳에서 사용할 수 있도록 내보내기
// export { firestore };
// firebase.initializeApp(firebaseConfig);
// export const firebaseInstance = firebase;
// export const authService = firebase.auth();
// export const dbService = firebase.firestore();
// export const storageService = firebase.storage();
