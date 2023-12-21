/** @format */

import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./MealSummary.module.css";
const MealSummary = () => {
  return (
    <section className={classes.section}>
      <Card>
        <div className={classes["summary-section"]}>
          <h2 className={classes["summary-title"]}>
            Delicious Food, Delivered To You
          </h2>
          <p className={classes.summary}>
            Choose your favourite meal from out broad selection of available
            meals and enjoy a delicious lunch or dinner at home
          </p>
          <p className={classes.summary}>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </Card>
    </section>
  );
};

export default MealSummary;
