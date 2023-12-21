import React, { useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Meal from "./Components/Meals/Meal/Meal";
import Cart from "./Components/Cart/Cart/Cart";
import CardProvider from "./Store/CartProvider/CardProvider";
import classes from "./App.module.css";

function App() {
  const [cartHandler, setCartHandler] = useState(false);

  const onOpenCartHandler = () => {
    setCartHandler(true);
  };

  const onCloseCartHandler = () => {
    setCartHandler(null);
  };

  return (
    <CardProvider>
      <div className={classes.App}>
      {cartHandler && <Cart onCloseCart={onCloseCartHandler}/>}
      <Header onOpenCart={onOpenCartHandler} />
      <Meal />
      </div>
    </CardProvider>
  );
}

export default App;
