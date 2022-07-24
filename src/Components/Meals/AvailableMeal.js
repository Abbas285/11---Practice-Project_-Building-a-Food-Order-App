import classs from "./AvailableMeal.module.css";
import React from "react";
import Card from "../UI/Card";
import Mealitem from "./Mealitem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    amount: 0,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    amount: 0,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    amount: 0,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    amount: 0,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <Mealitem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classs.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
