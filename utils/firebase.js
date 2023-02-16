import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHfL5aqo0GgFvUopBBjORj8ik_y70iJmQ",
  authDomain: "blog-15fba.firebaseapp.com",
  projectId: "blog-15fba",
  storageBucket: "blog-15fba.appspot.com",
  messagingSenderId: "992609917995",
  appId: "1:992609917995:web:08d1594f6c921b3b941e6e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app);