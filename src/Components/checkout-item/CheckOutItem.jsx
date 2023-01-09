import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import  {CheckOutItemContainer, ImageContainer, Img, PropsContainer, Quantity, ButtonCheckOut, RemoveBtn} from './checkout-item.styles.jsx';

const CheckOutItem = ({ item }) => {

    const { increase, decrease, deleteItem } = useContext(CartContext)
    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <Img src={item.imageUrl.replace(' ', '')} alt="" />
            </ImageContainer>

            <PropsContainer>{item.name}</PropsContainer>
            <Quantity as='div'>
                <ButtonCheckOut type='button' onClick={() => {
                    decrease(item)
                }}>&lt;</ButtonCheckOut>
                <Quantity>{item.quantity > 0
                    ? item.quantity
                    : deleteItem(item)
                }</Quantity>
                <ButtonCheckOut type='button' onClick={() => {
                    increase(item)
                }}>&gt;</ButtonCheckOut>
            </Quantity>
            <PropsContainer>{item.price}</PropsContainer>
            <ButtonCheckOut type='button'><RemoveBtn  onClick={() => deleteItem(item)}>X</RemoveBtn></ButtonCheckOut>
        </CheckOutItemContainer>
    );
};

export default CheckOutItem;