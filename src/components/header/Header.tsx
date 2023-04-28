import React from 'react';
import { Alignment, Navbar } from "@blueprintjs/core";
import Logo from "../logo/Logo";

const Header: React.FC = () => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Logo />
      <Navbar.Divider />
      <Navbar.Heading>МедКлиника</Navbar.Heading>
    </Navbar.Group>
  </Navbar>
)

export default Header;
