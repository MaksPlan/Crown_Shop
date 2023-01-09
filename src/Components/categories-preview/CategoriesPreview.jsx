import React, { useContext } from 'react';
import { ShopProductContext } from '../../context/ShopContext.jsx';
import { CartContext } from '../../context/CartContext';
import ProductCard from '../../Components/product-card/ProductCard.jsx';
import { Link } from 'react-router-dom';
import { PreviewContainer, Title, Preview } from './categoiesPreview.styles.jsx';

const CategoriesPreview = () => {
    const { addItemToCart } = useContext(CartContext);
    const { shopProduct, loader, errorShop } = useContext(ShopProductContext)

    return (
        <>
            {loader && <span>Loading</span>}
            {shopProduct && <div >
                {shopProduct.map((item) => {
                    return <PreviewContainer>

                        <Title to={`${item.title.toLowerCase()}`} >
                            {item.title}
                        </Title>


                        <Preview>
                            {item.items.map((el, i) => {
                                if (i < 4) {
                                    return <div>
                                        <ProductCard product={el} />
                                    </div>
                                }

                            })}
                        </Preview>
                    </PreviewContainer>
                })}
            </div >}
        </>

    );
};

export default CategoriesPreview;