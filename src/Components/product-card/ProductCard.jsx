import React, { useContext } from 'react';
import './product-card.styles.scss';
import Button from '../button/Button';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product }) => {

const {addItemToCart} = useContext(CartContext);

    const { name, imageUrl, price } = product

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt="img" />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={() => addItemToCart(product)}>Add to Card</Button>
        </div>
    );
};

export default ProductCard;