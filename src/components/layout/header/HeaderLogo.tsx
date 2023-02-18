import React from 'react';
import Logo from "../../logo/Logo";
import classes from "./Header.module.scss"

// TODO: В Logo сделать отступ
const HeaderLogo: React.FC = () => {
  const handleClick = () => {
    // TODO:  редирект на главную
  }

  return (
    <div className={classes.header__logo} onClick={handleClick}>
      <Logo/>
    </div>
  )
}

export default HeaderLogo;
