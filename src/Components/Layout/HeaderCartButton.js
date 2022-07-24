import React, { useContext, useEffect, useState } from "react";
import Headerclass from "./HeaderCart.module.css";
import Carticon from "../Cart/CartIcon";
import CartConext from "../../store/CartContext";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartConext);
  const { items } = cartCtx;

  const cartitem = items.reduce((cartnumer, item) => {
    return cartnumer + item.amount;
  }, 0);
  const btnclasses = `${Headerclass.button} ${
    btnIsHighlighted ? Headerclass.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);
  }, [items]);
  return (
    <button className={btnclasses} onClick={props.onclick}>
      <span className={Headerclass.icon}>
        <Carticon />
      </span>
      <span>Your Cart</span>
      <span className={Headerclass.badge}>{cartitem}</span>
    </button>
  );
};
export default HeaderCartButton;
