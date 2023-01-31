import React from "react";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import classes from "./Navbar.module.scss"

const Navbar = () => (
  <nav className={classes.navbar}>
    <Menu className={classes.navbar__menu}>
      <MenuItem className={classes.navbar__item} icon="home" text="Главная" />
      <MenuItem className={classes.navbar__item} icon="calendar" text="График работы" />
      <MenuItem className={classes.navbar__item} icon="application" text="Новости" />
      <MenuItem className={classes.navbar__item} icon="people" text="Сотрудники" />
      <MenuItem className={classes.navbar__item} icon="new-person" text="Новому сотруднику" />
      <MenuItem className={classes.navbar__item} icon="shopping-cart" text="Предложения партнеров" />
      <MenuDivider />
      <MenuItem className={classes.navbar__item} icon="annotation" text="База знаний" />
      <MenuItem className={classes.navbar__item} icon="help" text="Служба поддержки" />
    </Menu>
  </nav>
)

export default Navbar;
