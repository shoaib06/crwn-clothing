import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyAMpwdqCaoF_mXmvYDWEgDJF8PFU6WlXkI",
    authDomain: "crwn-db-e265d.firebaseapp.com",
    projectId: "crwn-db-e265d",
    storageBucket: "crwn-db-e265d.appspot.com",
    messagingSenderId: "7817815248",
    appId: "1:7817815248:web:3061371854d24c980faad5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;