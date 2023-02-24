import React, { useState } from "react";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import classes from "./Navbar.module.scss";
import { useHistory } from "react-router-dom";
import { IconName } from "@blueprintjs/icons";
import { navItems } from "./items";

const Navbar = () => {
  const history = useHistory();
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleClick = (href: string | undefined) => {
    if (href) {
      history.push(href);
      setCurrentPath(href);
    }
  }

  return (
    <nav className={classes.navbar}>
      <Menu className={classes.navbar__menu}>
        {navItems.map((item) => {
          if (item.type === "item") {
            return (
              <MenuItem
                key={item.id}
                className={classes.navbar__item}
                icon={item.icon as IconName}
                text={item.text}
                onClick={() => handleClick(item.href)}
                selected={currentPath === item.href}
              />
            )
          }

          return (
            <MenuDivider key={item.id} />
          )
        })}
      </Menu>
    </nav>
  );
}

export default Navbar;
