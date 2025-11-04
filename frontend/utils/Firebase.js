import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBQ8F7DsBEIxAAylrsjEGBfsNl5kY-Qz_M",
  authDomain: "kapdakart-d0748.firebaseapp.com",
  projectId: "kapdakart-d0748",
  storageBucket: "kapdakart-d0748.firebasestorage.app",
  messagingSenderId: "534707690242",
  appId: "1:534707690242:web:6be45f3e10f5122ae5c01b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}