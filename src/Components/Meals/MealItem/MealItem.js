/** @format */

import React, { useContext } from "react";
import MealItemForm from "../MealItemForm/MealItemForm";
import CartContext from "../../../Store/Cart-context/cart-context";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCxt = useContext(CartContext);
  const price = props.price.toFixed(2);

  const onAddToCartHandler = (amount) => {
    cartCxt.addItem({
      name: props.name,
      amount: amount,
      price: props.price,
      id: props.id,
    });
  };

  return (
    <li className={classes["meal-item"]}>
      <div className={classes["meal-details"]}>
        <h3 className={classes["meal-title"]}>{props.name}</h3>
        <p className={classes["meal-description"]}>{props.description}</p>
        <div className={classes["meal-amount"]}>{`$${price}`}</div>
      </div>

      <MealItemForm onAddToCart={onAddToCartHandler} />
    </li>
  );
};

export default MealItem;
