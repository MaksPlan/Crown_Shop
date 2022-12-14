import React from 'react';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserFromAuthWithPassword, complitedUserAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/FormInput';
import { SignUpContainer } from './sign-up-form.styles.jsx';
import Button from '../button/Button';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const { email, password, confirmPassword, displayName } = formFields;
        if (password !== confirmPassword) return alert("Password dosn't match");


        try {

            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            const userDocRef = await createUserFromAuthWithPassword(user, { displayName, password, email })
            setFormFields(defaultFormFields); //очистка полей при успешной авторизцации
            complitedUserAuth(user)

        } catch (error) {

            if (error.code === 'auth/email-already-in-use') return alert('User alredy exists')
            console.log('this error:', error.message);
        }
    }
    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>SIGN UP with email and password</span>

            <form onSubmit={handleOnSubmit} >

                <FormInput label={'Display name'} type='text' required onChange={handleOnChange} name='displayName' value={displayName} />

                <FormInput label={'Email'} type='email' required onChange={handleOnChange} name='email' value={email} />

                <FormInput label={'Password'} type='password' required onChange={handleOnChange} name='password' value={password} />

                <FormInput label={'Confirm Password'} type='password' required onChange={handleOnChange} name='confirmPassword' value={confirmPassword} />

                <Button type='submit' buttonType='default' >SIGN UP</Button>
            </form>
        </SignUpContainer >
    );
};

export default SignUpForm;