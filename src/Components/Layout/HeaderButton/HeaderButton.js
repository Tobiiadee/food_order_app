/** @format */

import React, { useContext, useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import CartContext from "../../../Store/Cart-context/cart-context";
import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  let btnClass = `${classes.btn} ${buttonIsHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  // const className = `${classes.btn} ${numberOfCartItems ? classes.bump : ""}`;

  return (
    <button className={btnClass} onClick={props.openCart}>
      <span className={classes["cart-icon"]}>
        <BsCart4 />
      </span>
      <span className={`${classes["btn-name"]} ${classes.none}`}>Your Cart</span>
      <span className={classes.block}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
