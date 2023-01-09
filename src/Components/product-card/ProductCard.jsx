import React, { useContext } from 'react';
import { ProductCardContainer, Img, Footer } from './product-card.styles.jsx';
import Button from '../button/Button';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product }) => {

    const { addItemToCart } = useContext(CartContext);

    const { name, imageUrl, price } = product
    return (
        <ProductCardContainer>
            <Img src={imageUrl.replace(' ', '')} alt="img" />
            <Footer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </Footer>
            <Button buttonType='inverted' onClick={() => addItemToCart(product)}>Add to Card</Button>
        </ProductCardContainer>
    );
};

export default ProductCard;