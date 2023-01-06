import React from 'react';
import './cart-item.styles.scss';
import { useEffect } from 'react';
const CartItem = ({ item }) => {
    const { name, quantity, price, imageUrl } = item;


    return (
        <div className='cart-item-container'>
            <img src={imageUrl.replace(' ', '')} alt="" />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {price} $</span>
            </div>

        </div>
    );
};

export default CartItem;