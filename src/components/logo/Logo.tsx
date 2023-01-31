import React from 'react';
import classes from "./Logo.module.scss";
import logo from "./logo.jpg";

const Logo: React.FC = () => (
  <img
    className={classes.logo}
    src={logo}
    alt="logo"
  />
)

export default Logo;
