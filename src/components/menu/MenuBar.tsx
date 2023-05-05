import React from 'react';
import classes from "./MenuBar.module.scss"
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

const MenuBar: React.FC = () => (
  <Menu className={classes.menu} large>
    <MenuItem className={classes.menu__item} icon="home"  text="Главная" />
    <MenuItem className={classes.menu__item}  icon="application" text="Новости" />
    <MenuItem className={classes.menu__item}  icon="people" text="Сотрудники" />
    <MenuItem className={classes.menu__item}  icon="shopping-cart" text="Предложения партнеров" />
    <MenuDivider />
    <MenuItem className={classes.menu__item}  text="Настройки..." icon="cog" intent="primary">
      <MenuItem icon="tick" text="Save on edit" />
      <MenuItem icon="blank" text="Compile on edit" />
    </MenuItem>
  </Menu>
)

export default MenuBar;
