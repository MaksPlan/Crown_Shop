import React, {useContext} from 'react';
import { ReactComponent as CartImg } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';
import { CartContext } from '../../context/CartContext';

const CartIcon = () => {
    const {cartItem, cartCount} = useContext(CartContext);


    return (
        <> 
          <div className='cart-icon-container'>
         
            <CartImg className='cart-icon' />
            <span className='item-count'>{
                cartCount
            }</span>
        </div>
        </>
      
    );
};

export default CartIcon;