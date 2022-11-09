import React from 'react';

const CartItem = ({item}) => {
    const {name, quantity, price} = item;

    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity} x {price}</span>
        </div>
    );
};

export default CartItem;