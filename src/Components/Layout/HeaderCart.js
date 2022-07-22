import React from "react";
import Headerclass from "./HeaderCart.module.css";
import Carticon from "./../Cart/CartIcon";
const HeaderCartButton = (props) => {
  return (
    <button className={Headerclass.button} onClick={props.onclick}>
      <span className={Headerclass.icon}>
        <Carticon />
      </span>
      <span>Your Cart</span>
      <span className={Headerclass.badge}>3</span>
    </button>
  );
};
export default HeaderCartButton;
