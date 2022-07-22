import React from "react";
import CartConext from "./CartContext";
const CartProvider = (props) => {
  const removeItemToCartHandler = (item) => {};
  const AddtoCartItemToHandler = (id) => {};
  const CartContext = {
    items: [],
    totalAmount: 0,
    additem: AddtoCartItemToHandler,
    removeitem: removeItemToCartHandler,
  };
  return (
    <CartConext.Provider value={CartContext}>
      {props.children}
    </CartConext.Provider>
  );
};

export default CartProvider;
