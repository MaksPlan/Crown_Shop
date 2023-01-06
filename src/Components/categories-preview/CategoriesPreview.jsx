import React, { useEffect, useContext } from 'react';
import { useCollectionDataOnce, useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { getQueryFB } from '../../utils/firebase/firebase.utils.js';
import { ShopProductContext } from '../../context/ShopContext.jsx';
import Button from '../button/Button';
import { CartContext } from '../../context/CartContext';
import './categoiesPreview.styles.scss';

const CategoriesPreview = () => {
    const { addItemToCart } = useContext(CartContext);
    const { shopProduct, loader, errorShop } = useContext(ShopProductContext)

    return (
        <>
            {loader && <span>Loading</span>}
            {shopProduct && <div >
                {shopProduct.map((item) => {
                    return <div className='main-container'>
                        <h2>{item.title}</h2>
                        <div className='flex-container'>
                            {item.items.map((el, i) => {
                                if (i < 4) {
                                    return <div>
                                        <img src={el.imageUrl} alt="img" />
                                        <span>{el.title}</span>
                                        <Button buttonType='inverted' onClick={() => addItemToCart(el)}>Add to Card</Button>
                                    </div>
                                }

                            })}
                        </div>
                    </div>
                })}
            </div>}
        </>

    );
};

export default CategoriesPreview;