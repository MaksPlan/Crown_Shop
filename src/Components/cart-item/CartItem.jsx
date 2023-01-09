import React from 'react';
import { CartItemContainer, ItemDatails, Img } from './cart-item.styles.jsx';
import { useEffect } from 'react';


const CartItem = ({ item }) => {
    const { name, quantity, price, imageUrl } = item;


    return (
        <CartItemContainer>
            <Img src={imageUrl.replace(' ', '')} alt="" />
            <ItemDatails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {price} $</span>
            </ItemDatails>

        </CartItemContainer>
    );
};

export default CartItem;