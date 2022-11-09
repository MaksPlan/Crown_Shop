import React, { useContext, useState, createContext} from 'react';

export const CartContext = createContext({
  cartItem: [],
  addItem: () => {},
})

export const CartProvider = ({children}) => {

  const [cartItem, setCartItem] = useState([]);


  const addItem = (cartItem ,productToAdd) => {

    const existCartItem  = cartItem.find((item) => item.id === productToAdd.id)
     
     if (existCartItem) {
      return cartItem.map((item) => {
    return   item.id === productToAdd.id ? 
    {...item, quantity: item.quantity + 1} :
    item
      })
     }   
    return [...cartItem, {...productToAdd, quantity: 1}]
   
  }
const addItemToCart = (productToAdd) => setCartItem(addItem(cartItem, productToAdd))
  const value = {cartItem, setCartItem, addItemToCart}

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}; 

export default CartProvider;