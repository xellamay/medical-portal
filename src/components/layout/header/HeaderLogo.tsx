import React from 'react';
import Logo from "../../logo/Logo";
import classes from "./Header.module.scss"
import { Link } from "react-router-dom";
import { ROUT_HOME_PAGE } from "../../../app/routing/constans";

// TODO: В Logo сделать отступ
const HeaderLogo: React.FC = () => (
  <div className={classes.header__logo}>
    <Link to="/">
      <Logo />
    </Link>
  </div>
)

export default HeaderLogo;
