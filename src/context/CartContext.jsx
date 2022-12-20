import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext({
  cartItem: [],
  addItem: () => { },
  cartCount: 0,
  increase: () => {},
  deleteItem: () => {},
})

export const CartProvider = ({ children }) => {

  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);


  const addItem = (cartItem, productToAdd) => {

    const existCartItem = cartItem.find((item) => item.id === productToAdd.id)

    if (existCartItem) {
      return cartItem.map((item) => {
        return item.id === productToAdd.id ?
          { ...item, quantity: item.quantity + 1 } :
          item
      })
    }
    return [...cartItem, { ...productToAdd, quantity: 1 }]

  }
  const deleteItem = (product) => {
    setCartItem(cartItem.filter((item) =>{ 
     if (item.id !== product.id) {
      return item
     }
    }))
  }

  const increaseQuntity = (product) => {
    cartItem.forEach((item) => {
      if (item.id === product.id) {
        item.quantity += 1
      }
    })
    // setCartItem([...cartItem,  {...product, quantity: product.quantity++}])
    setCartItem([...cartItem])
  return;
  }

  const decreaseQuntity = (product) => {
  
    cartItem.forEach((item) => {
      if (item.id === product.id) {
        item.quantity -= 1
      }
    })
    // setCartItem([...cartItem,  {...product, quantity: product.quantity++}])
    setCartItem([...cartItem])
  return;
  }

  const addItemToCart = (productToAdd) => setCartItem(addItem(cartItem, productToAdd))
  const increase = (product) => increaseQuntity(product)
  const decrease = (product) => decreaseQuntity(product)
  const value = { cartItem, setCartItem, addItemToCart, cartCount, increase, decrease, deleteItem }

  useEffect(() => {
    setCartCount(cartItem.reduce((accum, item) => accum + item.quantity, 0))
  }, [cartItem])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;