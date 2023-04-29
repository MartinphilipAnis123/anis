import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAqhzWBF3ow5LvT7Fb1VuxbZr-J5LaMmlA",
    authDomain: "anisfirebase-162c9.firebaseapp.com",
    projectId: "anisfirebase-162c9",
    storageBucket: "anisfirebase-162c9.appspot.com",
    messagingSenderId: "538494642415",
    appId: "1:538494642415:web:7c650bcb68348f02d7931a"
  };

  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();