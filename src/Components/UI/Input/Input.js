/** @format */

import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label
        htmlFor={props.input.id}
        className={`${props.className} ${classes.label}`}>
        {props.label}
      </label>
      <input
        ref={ref}
        type='number'
        defaultValue={1}
        {...props.Input}
        className={`${props.className} ${classes["input-feild"]}`}
      />
    </div>
  );
});

export default Input;
