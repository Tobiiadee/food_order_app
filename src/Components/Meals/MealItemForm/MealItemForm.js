/** @format */

import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes["meal-form"]} onSubmit={submitHandler}>
      <Input
        label='Amount'
        ref={amountRef}
        input={{
          type: "number",
          id: "amount_" + props.id,
          max: "5",
          min: "1",
          defaultValue: "1",
          step: "1",
        }}
      />
      <div className={classes["meal-action"]}>
        <button className={classes["meal-btn"]}>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </div>
    </form>
  );
};

export default MealItemForm;
