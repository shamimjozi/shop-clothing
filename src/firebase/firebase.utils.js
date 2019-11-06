import firebase from 'firebase/app' ;
import 'firebase/firestore' ;
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4thgts_A_jtxH5DQAo3x4Cnp6UuEfB8s",
    authDomain: "crwn-clothing-1ee3e.firebaseapp.com",
    databaseURL: "https://crwn-clothing-1ee3e.firebaseio.com",
    projectId: "crwn-clothing-1ee3e",
    storageBucket: "crwn-clothing-1ee3e.appspot.com",
    messagingSenderId: "335960340635",
    appId: "1:335960340635:web:b25755953de3fe3a87ae3e",
    measurementId: "G-XSGCQ2EYQV"
}

//take the user in authentication library and store in data base

export const createUserProfileDocument = async (userAuth , additionalData ) =>{
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists){
        const {displayName , email} = userAuth ;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName ,
                email,
                createdAt ,
                ...additionalData
            });
        } catch(error){
            console.log('error creating user' , error.message);
        }
    }

    return userRef ;
}

firebase.initializeApp(config) ;

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp : 'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase ;