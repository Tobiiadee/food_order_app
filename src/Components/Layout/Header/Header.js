/** @format */

import React, { Fragment } from "react";
import mealImage from "../../../Assets/meal.jpg";
import HeaderButton from "../HeaderButton/HeaderButton";
import classes from "./Header.module.css";

const Header = (props) => {
  const titleClass = `${classes.title}`

  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={titleClass}>ReactMeals</h1>
        <div>
          <HeaderButton openCart={props.onOpenCart} />
        </div>
      </header>

      <div>
        <img
          src={mealImage}
          alt='A table of meal!'
          className={classes["meal-image"]}
        />
      </div>
    </Fragment>
  );
};

export default Header;
