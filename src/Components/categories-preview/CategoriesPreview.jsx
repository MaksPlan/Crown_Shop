import React, { useContext } from 'react';
import { ShopProductContext } from '../../context/ShopContext.jsx';
import { CartContext } from '../../context/CartContext';
import ProductCard from '../../Components/product-card/ProductCard.jsx';
import { Link } from 'react-router-dom';
import './categoiesPreview.styles.scss';

const CategoriesPreview = () => {
    const { addItemToCart } = useContext(CartContext);
    const { shopProduct, loader, errorShop } = useContext(ShopProductContext)

    return (
        <>
            {loader && <span>Loading</span>}
            {shopProduct && <div >
                {shopProduct.map((item) => {
                    return <div className='category-preview-container '>

                        <Link to={`${item.title.toLowerCase()}`} className='title'>
                            {item.title}
                        </Link>


                        <div className='preview'>
                            {item.items.map((el, i) => {
                                if (i < 4) {
                                    return <div>
                                        <ProductCard product={el} />
                                    </div>
                                }

                            })}
                        </div>
                    </div>
                })}
            </div >}
        </>

    );
};

export default CategoriesPreview;