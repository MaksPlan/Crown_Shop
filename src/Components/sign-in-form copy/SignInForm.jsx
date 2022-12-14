import React from 'react';
import { useState } from 'react';
import { createUserDocFromAuth, signInWithGooglePopup, signIn } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/FormInput';
import { SignInContainer, ButtonWrapper } from './sign-in-form.styles.jsx';
import Button from '../button/Button';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, } = formFields;

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        // setCurrentUser(user)
        await createUserDocFromAuth(user);

    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = formFields;

        try {
            const { user } = await signIn(email, password);
            setFormFields(defaultFormFields); //очистка полей при успешной авторизцации
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
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span> SIGN IN with email and password</span>

            <form onSubmit={handleOnSubmit} >

                <FormInput label={'Email'} type='email' required onChange={handleOnChange} name='email' value={email} />

                <FormInput label={'Password'} type='password' required onChange={handleOnChange} name='password' value={password} />

                <ButtonWrapper>
                    <Button type='submit' buttonType='default' onSubmit={handleOnSubmit} >SIGN IN</Button>
                    <Button type='submit' buttonType='google' onSubmit={signInWithGoogle} >SIGN IN WITH GOOGLE</Button>

                </ButtonWrapper>
            </form>
        </SignInContainer >
    );
};

export default SignInForm;