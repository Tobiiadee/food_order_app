/** @format */

import React from "react";
import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card/Card";
import classes from "./AvailableMeals.module.css";

const meals = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    id: "M1",
  },

  {
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    id: "M2",
  },

  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    id: "M3",
  },

  {
    name: "Green Bowl",
    description: "Healthy ...and green...",
    price: 18.99,
    id: "M4",
  },
];

const AvailableMeals = () => {
  const MealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      key={meal.id}
    />
  ));

  return (
    <section className={classes["available-meals"]}>
      <Card className={classes["meals-body"]}>{MealList}</Card>
    </section>
  );
};

export default AvailableMeals;
