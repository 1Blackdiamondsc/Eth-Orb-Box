import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAfaNy53DGaBqYg3aez2Ip5OCxCXaZ2WCk",
    authDomain: "test-cf-97bfc.firebaseapp.com",
    databaseURL: "https://test-cf-97bfc-default-rtdb.firebaseio.com",
    projectId: "test-cf-97bfc",
    storageBucket: "test-cf-97bfc.appspot.com",
    messagingSenderId: "447290084585",
    appId: "1:447290084585:web:8b4b3f8db88b369197b478"

})

export const auth = app.auth()

export default app