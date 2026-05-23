import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

 const firebaseConfig = {
    apiKey: "AIzaSyBhRgl26rjcvpDGSZPiMQLJZlSDK7z3Vj4",
    authDomain: "ai-skin-app-ddcf3.firebaseapp.com",
    projectId: "ai-skin-app-ddcf3",
    storageBucket: "ai-skin-app-ddcf3.firebasestorage.app",
    messagingSenderId: "824623940624",
    appId: "1:824623940624:web:1bb941a0e8b4ce978c7695"
  };
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.signup = function () {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)

    .then(() => {
      alert("Signup successful");
    })

    .catch((error) => {
      alert(error.message);
    });

};

window.login = function () {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)

    .then(() => {
      alert("Login successful");
    })

    .catch((error) => {
      alert(error.message);
    });

};

window.logout = function () {

  signOut(auth)

    .then(() => {
      alert("Logged out");
    });

};