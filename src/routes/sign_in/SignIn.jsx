import React from "react";
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {

    const handleGoogleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
        console.log(userDocRef)
    }

    return <div>
        <h2>
            SIGN IN
        </h2>
        <button onClick={() => handleGoogleSignIn()}>
            SIGN IN WITH GOOGLE
        </button>
    </div>;
};

export default SignIn;
