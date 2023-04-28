import React from 'react';
import Logo from "../../logo/Logo";
import { Link } from "react-router-dom";
import classes from "./HeaderLogo.module.scss"

const HeaderLogo: React.FC = () => (
    <div className={classes.logo}>
      <Link to="/home">
        <Logo />
      </Link>
    </div>
)

export default HeaderLogo;
