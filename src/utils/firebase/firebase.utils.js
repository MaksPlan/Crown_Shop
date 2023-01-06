import { initializeApp } from "firebase/app";
import {
    getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {
    getFirestore,
    doc, //document
    getDoc, //get data from doc
    setDoc,
    collection,
    writeBatch,
    query
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIVRS-oXdLl-tOqfMk_aPvdbVGOWgS_lI",

    authDomain: "clothes-shop-d2299.firebaseapp.com",
  
    projectId: "clothes-shop-d2299",
  
    storageBucket: "clothes-shop-d2299.appspot.com",
  
    messagingSenderId: "533429524682",
  
    appId: "1:533429524682:web:16edcb1f7fccc796173c33"
  
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid) //обращение к документу с именем в колл-ии users
    const userSnapShot = await getDoc(userDocRef); // получение данных по конкретному юзеру
    // console.log(userSnapShot)

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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const createUserFromAuthWithPassword = async (userAuth, additional) => {

    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email, password } = userAuth;
        const createdAt = new Date()

        try { //cсоздаем документ с юзером
            await setDoc(userDocRef, {
                displayName, email, createdAt, password, ...additional
            })
        } catch (error) {
            console.log('error create user: ', error.message)
        }
    }

    return userDocRef


}

export const complitedUserAuth = async (user) => {
    const userDocRef = doc(db, 'users', user.uid)

    const userSnapShot = await getDoc(userDocRef);
    // получение данных по конкретному юзеру
    if (userSnapShot.exists()) {
        return alert('User has created~~')
    }

}


export const signIn = async (email, password) => {

    if (!(email && password)) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);
//следит за изменениями авторизации юзера
export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback); 

export const addCollectionWithDocs = async (collectionKey, objects) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objects.forEach((obj) => {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef, obj);
    })

    await batch.commit();
    console.log('done');
}

export const getQueryFB = (toggler, pathname) => {

    if (toggler === 'docs') {
        return query(doc(db, `${pathname}`))
    } else if (toggler === 'collection') {
        return query(collection(db, `${pathname}`))
    }
}