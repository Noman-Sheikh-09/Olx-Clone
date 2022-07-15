import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyD2zNMOfbJR7xgImUGvEPoBzaYrxPDHoXc",
    authDomain: "olx-clone-cc374.firebaseapp.com",
    projectId: "olx-clone-cc374",
    storageBucket: "olx-clone-cc374.appspot.com",
    messagingSenderId: "988345861202",
    appId: "1:988345861202:web:10e54bc05964ba94084b8b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage()