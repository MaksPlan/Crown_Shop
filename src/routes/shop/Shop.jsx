import React, { useContext } from 'react';
import { ShopProductContext } from '../../context/ShopContext';
import ProductCard from '../../Components/product-card/ProductCard';
import './shop.styles.scss';

const Shop = () => {

  const { shopProduct } = useContext(ShopProductContext)
  return <div className='shop-container'>

    {
      shopProduct.map((item) => <ProductCard product={item} />)
    }

  </div>;
};

export default Shop;
