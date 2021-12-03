import React from "react";
//import { NavLink } from "react-router-dom";

import "./Button.css";

function Button(props) {
  return <button type="button">{props.text} </button>;
}
export default Button;
