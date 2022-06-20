import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDK5VRswdpkPwO0INY2VFnnX2Rc9iTd2-M",
    authDomain: "boo-dog.firebaseapp.com",
    projectId: "boo-dog",
    storageBucket: "boo-dog.appspot.com",
    messagingSenderId: "937192423167",
    appId: "1:937192423167:web:8dbdc539eeeb9429b416ca",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
