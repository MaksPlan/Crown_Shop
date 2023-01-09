import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { CheckOutContainer, CheckOutHeader, HeaderBlock, Total } from './cart-check-out.styles.jsx';
import CheckOutItem from '../../Components/checkout-item/CheckOutItem';

const CartCheckOut = () => {
    const { cartItem, increase, decrease } = useContext(CartContext)
    // useEffect(() => {console.log(cartItem)},[cartItem])

    return (
        <CheckOutContainer>
            <CheckOutHeader>
                {['product', 'description', 'quantity', 'price', 'remove']
                    .map((el) => {
                        return <HeaderBlock><span>{el}</span></HeaderBlock>
                    })}
            </CheckOutHeader>


            {cartItem.map((item) => {
                return <>
                    <CheckOutItem item={item} key={item.id + item.name} />
                </>
            })}

            <Total>Total: {cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0)}</Total>
        </CheckOutContainer>
    );
};

export default CartCheckOut;