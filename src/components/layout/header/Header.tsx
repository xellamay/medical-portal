import React from "react";
import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import HeaderLogo from "./HeaderLogo";
import NavbarActions from "./NavbarActions";
import NavbarUser from "./NavbarUser";

const Header = () => {
  return (
    <Navbar fixedToTop>
      <NavbarGroup>
        <HeaderLogo />
        <NavbarDivider />
        <NavbarHeading>
          Классная мед клиника
        </NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align="right">
        <NavbarActions />
        <NavbarDivider />
        <NavbarUser />
      </NavbarGroup>
    </Navbar>
  )
}

export default Header
