import React from "react";
import mealimage from "../../assets/meals.jpg";
import Headermodule from "./Header.module.css";
import HeaderCartButton from "./HeaderCart";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={Headermodule.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onclick={props.onShowCart} />
      </header>
      <div className={Headermodule["main-image"]}>
        <img src={mealimage} alt="header meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
