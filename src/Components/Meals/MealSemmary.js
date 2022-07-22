import React from "react";
import mealClass from "./MealSammary.module.css";
const MealSemmary = () => {
  return (
    <section className={mealClass.summary}>
      <h2>Delicious Food,Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality igredients,just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealSemmary;
