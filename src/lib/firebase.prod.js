import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";








const config = {
    apiKey: "AIzaSyCY0BJNUFdBHNnJ1VpnowhXW2ic3lPWrVk",
    authDomain: "netflix-4f724.firebaseapp.com",
    databaseURL: "https://netflix-4f724.firebaseio.com",
    projectId: "netflix-4f724",
    storageBucket: "netflix-4f724.appspot.com",
    messagingSenderId: "466614758211",
    appId: "1:466614758211:web:88a2818f261cb111ec9df6"
}

const firebase = Firebase.initializeApp(config)
const firestore = firebase.firestore()
const auth = firebase.auth()
// seedData(firebase)

export { firebase, firestore, auth };    