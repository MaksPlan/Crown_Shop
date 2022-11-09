import React, {useContext} from 'react';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../context/CartContext';

const CartDropdown = () => {
    const {cartItem} = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
              {cartItem.map((item) => <CartItem item={item}/>)}
            </div>
              <Button>GO TO  CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;