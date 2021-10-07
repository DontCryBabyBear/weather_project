import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer className={classes.content}>
      <p>Made by Ivan</p>
      <div className={classes.apis}>
        <p>mapbox </p>
        <p>open weathermap </p>
      </div>
    </footer>
  );
}

export default Footer;
