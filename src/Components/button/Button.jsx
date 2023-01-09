import React from 'react';
import { BaseButton, GoogleButton, InvertedButton } from './button.styles'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    default: ''
}


const Button = ({ buttonType, children, ...otherProps }) => {

 Button.BaseButton = BaseButton;
 Button.GoogleButton = GoogleButton;
 Button.InvertedButton = InvertedButton;

    return (

        <>
        {
            buttonType === 'google' && <Button.GoogleButton {...otherProps}>
                {children}
            </Button.GoogleButton>


            
        }
        {
            buttonType === 'inverted' && <Button.InvertedButton {...otherProps}>
                {children}
            </Button.InvertedButton>
        }

{     buttonType !== 'google' && buttonType !== 'inverted' && <Button.BaseButton {...otherProps}>
            {children}
        </Button.BaseButton>}
        
        </>
     
    );
};



export default Button;