import React, { useState, useContext, createContext, useEffect, useCallback } from "react";
import SHOP_DATA from '../shop-data'
import { addCollectionWithDocs, db, getQueryFB } from '../utils/firebase/firebase.utils.js';
import { useCollectionDataOnce, useDocumentData, useDocumentDataOnce } from 'react-firebase-hooks/firestore';




export const ShopProductContext = React.createContext({
  shopProduct: [],
  setShopProduct: () => [],
  loader: false,
  errorShop: null,
})


const ShopProvider = ({ children }) => {


  const [shopProduct, setShopProduct] = useState([])
  const [loader, setLoader] = useState(true);
  const [errorShop, setErrorShop] = useState(null);
  const [categoriesDocs, loaderCat, errorCat] = useCollectionDataOnce(getQueryFB('collection', 'categories'))
 
  useEffect(() => {
    if (categoriesDocs) {
      let newCategoriesDocs = categoriesDocs.map((item) => {
      // console.log(item))
      item.items.map((el) => 
     {
       el.imageUrl = el.imageUrl.replace(' ', '');
        return el;
     })
     return item
    })
      console.log(newCategoriesDocs)
          setShopProduct(newCategoriesDocs)
    }
    setLoader(loaderCat);
    setErrorShop(errorCat)

  }, [categoriesDocs,
    loaderCat, errorCat])


  const value = { shopProduct, setShopProduct, loader, errorShop }

  return <ShopProductContext.Provider value={value}>
    {children}
  </ShopProductContext.Provider>;
};

export default ShopProvider;
