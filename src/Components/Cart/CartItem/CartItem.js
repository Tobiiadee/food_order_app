/** @format */

import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {

  return (
    <li>
      <div className={classes["name-block"]}>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes["amt-block"]}>
          <span className={classes.price}>${props.price}</span>
          <div className={classes.block}>{`x${props.amount}`}</div>
        </div>
      </div>
      <div className={classes["cart-action"]}>
        <button className={classes.sub} onClick={props.onRemove}>
          -
        </button>
        <button className={classes.add} onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
