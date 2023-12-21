import React from "react";

const Button = (props) => {
    <button className={props.className}>{props.value}</button>
    console.log(props.value);
};

export default Button;