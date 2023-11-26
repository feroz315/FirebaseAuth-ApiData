
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCybbHhtxFUQOzgJzsY2Y5YfcC0npyySaI",
  authDomain: "webproject-26c81.firebaseapp.com",
  databaseURL: "https://webproject-26c81-default-rtdb.firebaseio.com",
  projectId: "webproject-26c81",
  storageBucket: "webproject-26c81.appspot.com",
  messagingSenderId: "200548621424",
  appId: "1:200548621424:web:107b6ac8eccd0968ee68b5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

