import React, { useContext } from 'react';
import { ReactComponent as CartImg } from '../../assets/shopping-bag.svg'
import { CartIconContainer, ShopingIcon, ItemCount } from './cart-icon.styles.jsx';
import { CartContext } from '../../context/CartContext';

const CartIcon = () => {
    const { cartItem, cartCount } = useContext(CartContext);


    return (
        <>
            <CartIconContainer>

                <CartImg />
                <ItemCount>{
                    cartCount
                }</ItemCount>
            </CartIconContainer>
        </>

    );
};

export default CartIcon;