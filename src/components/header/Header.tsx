import React from 'react';
import { Alignment, Navbar } from "@blueprintjs/core";
import HeaderLogo from "./headerLogo/HeaderLogo";
import NavUser from "./navUser/NavUser";
import NavActions from "./navActions/NavActions";

const Header: React.FC = () => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <HeaderLogo />
      <Navbar.Heading>МедКлиника</Navbar.Heading>
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <NavActions />
      <Navbar.Divider />
      <NavUser />
    </Navbar.Group>
  </Navbar>
)

export default Header;
