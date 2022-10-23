import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import {
    getFirestore,
    doc, //document
    getDoc, //get data from doc
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAieju392UH-kl2CsYkY50WslOjxs2feBQ",
    authDomain: "crwn-shop-bf775.firebaseapp.com",
    projectId: "crwn-shop-bf775",
    storageBucket: "crwn-shop-bf775.appspot.com",
    messagingSenderId: "436520126514",
    appId: "1:436520126514:web:e05cd6b7856e1249e2542b",
    measurementId: "G-JY869MF3H7",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid) //обращение к документу с именем в колл-ии users
    const userSnapShot = await getDoc(userDocRef); // получение данных по конкретному юзеру
    console.log(userSnapShot)

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth; //userSnapShot = данные конкретного usera, проверем существует ли такой ser
        const createdAt = new Date() //если usera не существует в базе, созадем дату и имя и почту

        try { //cсоздаем документ с юзером
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log('error create user: ', error.message)
        }
    }

    return userDocRef
}