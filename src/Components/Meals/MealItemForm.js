import React, { useRef, useState } from "react";
import classss from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const inputref = useRef();
  const [amountIsvalid, setAmountisValid] = useState(true);

  const addCartdata = (event) => {
    event.preventDefault();
    const enteredAmount = inputref.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountisValid(false);
      return;
    }
    props.getamount(enteredAmountNumber);
  };
  return (
    <form className={classss.form} onSubmit={addCartdata}>
      <Input
        ref={inputref}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsvalid && <p>Please Enter a Valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
