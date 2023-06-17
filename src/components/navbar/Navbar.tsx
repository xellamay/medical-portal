import React, { useEffect, useState } from 'react';
import classes from "./Navbar.module.scss"
import { IconName, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "./items";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname]);

  const handleClick = (href: string | undefined) => {
    if (href) {
      navigate(href)
    }
  }

  return (
    <Menu className={classes.menu} large>
      {navItems.map((item) => {
        if (item.type === "item") {
          return (
            <MenuItem
              key={item.id}
              className={classes.menu__item}
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
  )
}

export default Navbar;
