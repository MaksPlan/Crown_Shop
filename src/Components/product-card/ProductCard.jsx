import React from 'react';
import './product-card.styles.scss';
import Button from '../button/Button';

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt="img" />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Add to Card</Button>
        </div>
    );
};

export default ProductCard;