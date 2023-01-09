import React, { useContext } from 'react';
import { ShopProductContext } from '../../context/ShopContext';
import ProductCard from '../../Components/product-card/ProductCard';
import { useLocation } from 'react-router-dom';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { db } from '../../utils/firebase/firebase.utils.js';
import { query, doc } from 'firebase/firestore';
import CategoriesPreview from '../../Components/categories-preview/CategoriesPreview';
import { ShopContainer } from './shop.styles.jsx';

const Shop = () => {
  const location = useLocation()
  const queryDocs = location.pathname.split('/')
  const path = queryDocs[2]; //нужна проверка по кол-ву слэшей
  console.log(typeof path)

  // path = path ? path : "hats";

  const [docs, loader, error] = useDocumentDataOnce(query(doc(db, 'categories', `${queryDocs.length === 3 ? path : 'hats'}`)))
  if (!path) {
    return <CategoriesPreview />
  } else {
    return <>

      {loader && 'Loading'}
      {docs && <ShopContainer>
        {docs.items.map((item, i) => <ProductCard key={i} product={item} />)}
      </ShopContainer>

      }

    </>

  };
}

export default Shop;
