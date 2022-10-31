import React from 'react';
import { useState, useContext } from 'react';
import { createUserDocFromAuth, signInWithGooglePopup, createUserWithEmailAndPassword, signIn } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/FormInput';
import './sign-in-form.styles.scss';
import Button from '../button/Button';
import { UserContext } from '../../user-context/UserContext';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, } = formFields;
    const {setCurrentUser} = useContext(UserContext);

    // console.log(formFields)

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        setCurrentUser(user)
        await createUserDocFromAuth(user);

    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const { email, password, displayName } = formFields;


        try {

            const { user } = await signIn(email, password);

            setCurrentUser(user)
            setFormFields(defaultFormFields); //очистка полей при успешной авторизцации
            // complitedUserAuth(user)

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    return alert('Wrong Password')
                case 'auth/user-not-found':
                    return alert('Incorrect email OR user does not exists');
                default:
                    return;
            }
        }
    }
    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span> SIGN IN with email and password</span>

            <form onSubmit={handleOnSubmit} >

                <FormInput label={'Email'} type='email' required onChange={handleOnChange} name='email' value={email} />

                <FormInput label={'Password'} type='password' required onChange={handleOnChange} name='password' value={password} />

                <div className='button-wrapper'>
                    <Button type='submit' buttonType='default' onSubmit={handleOnSubmit} >SIGN IN</Button>
                    <Button type='submit' buttonType='google' onSubmit={signInWithGoogle} >SIGN IN WITH GOOGLE</Button>

                </div>
            </form>
        </div >
    );
};

export default SignInForm;