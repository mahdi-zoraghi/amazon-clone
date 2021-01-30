import firebase from "firebase/app"

import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDm2DybOKsFXth1VmzB9gxGwmal4MsQGIg",
  authDomain: "clone-76197.firebaseapp.com",
  projectId: "clone-76197",
  storageBucket: "clone-76197.appspot.com",
  messagingSenderId: "368221368892",
  appId: "1:368221368892:web:ce2b453796d5873879c939",
  measurementId: "G-VYDVH175TK",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }
