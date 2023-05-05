import React from 'react';
import { Classes, Popover2 } from "@blueprintjs/popover2";
import { Button, IconName, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { ROUT_AUTHORIZATION_PAGE } from "../../../routing/routes";

const NavUser: React.FC = () => {
  const handleClickProfile = () => {
    console.log("click")
  }

  const handleClickLogout = () => {
    localStorage.clear();
    window.location.href = ROUT_AUTHORIZATION_PAGE;
  }

  return (
    <Popover2
      interactionKind="click"
      popoverClassName={Classes.POPOVER2_CONTENT_SIZING}
      placement="bottom-start"
      content={
        <Menu>
          <MenuItem icon="annotation" text="Профиль" onClick={handleClickProfile} />
          <MenuDivider/>
          <MenuItem icon="log-out" text="Выйти" onClick={handleClickLogout} />
        </Menu>
      }
      renderTarget={({ isOpen, ref, ...targetProps }) => (
        <Button {...targetProps} elementRef={ref} intent="primary" icon={IconNames.USER}/>
      )}
    />
  )
}

export default NavUser;
