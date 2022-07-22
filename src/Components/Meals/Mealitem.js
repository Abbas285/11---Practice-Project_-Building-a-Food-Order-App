import React from "react";
import classs from "./Mealitem.module.css";
import MealItemForm from "./MealItemForm";
const Mealitem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  return (
    <li className={classs.meal} key={props.key}>
      <div>
        <h3>{props.name}</h3>
        <div className={classs.description}>{props.description}</div>
        <div className={classs.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default Mealitem;
