// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJwAOyUqBcM-8dz-L0jIxFQcK4ILytqdg",
  authDomain: "module52dragonnewsresources.firebaseapp.com",
  projectId: "module52dragonnewsresources",
  storageBucket: "module52dragonnewsresources.appspot.com",
  messagingSenderId: "931924319036",
  appId: "1:931924319036:web:384c1b3ab519e551f3dc39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);

export default auth;