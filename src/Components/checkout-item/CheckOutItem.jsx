import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './checkout-item.styles.scss';

const CheckOutItem = ({ item }) => {

    const { increase, decrease, deleteItem } = useContext(CartContext)
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={item.imageUrl} alt="" />
            </div>

            <span>{item.name}</span>
            <div className='quantity-container'>
                <button type='button' onClick={() => {
                    decrease(item)
                }}>&lt;</button>
                <span>{item.quantity}</span>
                <button type='button' onClick={() => {
                    increase(item)
                }}>&gt;</button>
            </div>
            <span>{item.price}</span>
            <button type='button'><div className='remove-button' onClick={() => deleteItem(item)}>X</div></button>
        </div>
    );
};

export default CheckOutItem;