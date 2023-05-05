import React from 'react';
import Logo from "../../logo/Logo";
import { Link } from "react-router-dom";
import classes from "./HeaderLogo.module.scss"
import { ROUT_HOME_PAGE } from "../../../routing/routes";

const HeaderLogo: React.FC = () => (
  <div className={classes.logo}>
    <Link to={ROUT_HOME_PAGE}>
      <Logo />
    </Link>
  </div>
)

export default HeaderLogo;
