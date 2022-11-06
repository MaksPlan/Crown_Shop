import React from 'react';
import Button from '../button/Button';
import './cart-dropdown.styles.scss';

const CartDropdown = ({show}) => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <Button>GO TO  CHECKOUT</Button>
            </div>
        </div>
    );
};

export default CartDropdown;