/** @format */

import React, { Fragment, useContext } from "react";
import Modal from "../../UI/Modal/Modal";
import CartContext from "../../../Store/Cart-context/cart-context";
import CartItem from "../CartItem/CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartCtxItem = cartCtx.items;
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const hasItems = cartCtxItem.length > 0;
  let cartItems = [];
  let emptyCart = <p className={classes["empty-cart"]}>Cart is empty...</p>;

  cartItems = cartCtxItem.map((item) => (
    <CartItem
      name={item.name}
      amount={item.amount}
      price={item.price}
      key={item.id}
      id={item.id}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <Fragment>
      <Modal onClose={props.onCloseCart}>
        <div className={classes.cart}>
          {cartItems.length === 0 ? emptyCart : null}
          <ul className={classes["cart-item"]}>{cartItems}</ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
          </div>

          <div className={classes.action}>
            <button
              className={classes["close-action"]}
              onClick={props.onCloseCart}>
              Close
            </button>
            {hasItems && <button className={classes["order-action"]}>Order</button>}
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Cart;
