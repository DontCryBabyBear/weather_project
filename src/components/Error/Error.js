import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import classes from "./Error.module.css";
function Error({ msg }) {
  return <div className={classes.content}>{msg}</div>;
}

export default Error;
