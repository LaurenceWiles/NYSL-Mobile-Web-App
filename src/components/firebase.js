import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'
import { useList } from 'react-firebase-hooks/database';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACxsLkDB8YasICUCzLuNNCStwqozIJYYY",
    authDomain: "nysl-app-3d8b0.firebaseapp.com",
    projectId: "nysl-app-3d8b0",
    storageBucket: "nysl-app-3d8b0.appspot.com",
    messagingSenderId: "504685886889",
    appId: "1:504685886889:web:53ced514ad184e71aad8b8",
    measurementId: "G-DKN7WPEF96"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const database = getDatabase(app);//line 21

export { app, database, useList, auth, provider };