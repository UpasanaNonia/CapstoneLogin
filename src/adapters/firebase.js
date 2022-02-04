import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyChNG5vItF7zoSpml1LB-uNkvKJOSeNDuU",
  authDomain: "login-89d67.firebaseapp.com",
  projectId: "login-89d67",
  storageBucket: "login-89d67.appspot.com",
  messagingSenderId: "172784753949",
  appId: "1:172784753949:web:ec17f359653eb74e7255f4",
  measurementId: "G-RK0WDG4SX3"
};
const myApp = firebase.initializeApp(firebaseConfig);

export const auth = myApp.auth();
