import React, {useState, useContext, createContext} from "react";
import SHOP_DATA from '../shop-data.json'

export const ShopProductContext = React.createContext({
  shopProduct: [],
  setShopProduct: () => [],
})

const ShopProvider = ({children}) => {
const [shopProduct, setShopProduct] = useState(SHOP_DATA)
const value = {shopProduct, setShopProduct} 

  return <ShopProductContext.Provider value={value}>
   {children}
  </ShopProductContext.Provider>;
};

export default ShopProvider;
