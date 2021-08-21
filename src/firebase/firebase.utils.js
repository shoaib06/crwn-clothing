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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;