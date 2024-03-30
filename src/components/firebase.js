import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyACxsLkDB8YasICUCzLuNNCStwqozIJYYY",
    authDomain: "nysl-app-3d8b0.firebaseapp.com",
    projectId: "nysl-app-3d8b0",
    storageBucket: "nysl-app-3d8b0.appspot.com",
    messagingSenderId: "504685886889",
    appId: "1:504685886889:web:53ced514ad184e71aad8b8",
    measurementId: "G-DKN7WPEF96"
  };

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);