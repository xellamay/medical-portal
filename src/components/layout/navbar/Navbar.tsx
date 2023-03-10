import React, { useEffect, useState } from "react";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import classes from "./Navbar.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import { IconName } from "@blueprintjs/icons";
import { navItems } from "./items";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(location.pathname);

  const handleClick = (href: string | undefined) => {
    if (href) {
      history.push(href);
    }
  }

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname]);

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
                selected={currentPath.startsWith(item.href!)}
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
