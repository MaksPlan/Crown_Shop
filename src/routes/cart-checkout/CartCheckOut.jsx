import React, {useContext, useEffect} from 'react';
import {CartContext} from '../../context/CartContext';
import './cart-check-out.styles.scss';
import CheckOutItem from '../../Components/checkout-item/CheckOutItem';

const CartCheckOut = () => {
    const {cartItem, increase, decrease} = useContext(CartContext)
    // useEffect(() => {console.log(cartItem)},[cartItem])

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                         {['product', 'description', 'quantity', 'price', 'remove']
            .map((el) => {
                return <div className='header-block'><span>{el}</span></div>
            })}
            </div>
       
     
        {cartItem.map((item) => {
            return <>
                <CheckOutItem item={item} key={item.id+item.name}/>
            </>
        })}
        
        <span className='total'>Total: {cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0 )}</span>
        </div>
    );
};

export default CartCheckOut;