/** @format */

import React, { Fragment } from "react";
import MealSummary from "../MealSummary/MealSummary";
import AvailableMeals from "../AvailableMeals/AvailableMeals";
import classes from "./Meal.module.css";

const Meal = () => {
  return (
    <Fragment>
      <div className={classes.meal}>
        <MealSummary />
        <AvailableMeals />
      </div>
    </Fragment>
  );
};

export default Meal;
