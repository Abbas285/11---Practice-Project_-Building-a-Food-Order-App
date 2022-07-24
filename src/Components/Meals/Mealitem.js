import React, { useContext } from "react";
import classs from "./Mealitem.module.css";
import MealItemForm from "./MealItemForm";
import CartConext from "../../store/CartContext";
const Mealitem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  const ctx = useContext(CartConext);
  const getamount = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <li className={classs.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classs.description}>{props.description}</div>
        <div className={classs.price}>{price}</div>
      </div>
      <div>
        <MealItemForm getamount={getamount} />
      </div>
    </li>
  );
};

export default Mealitem;
