import React from 'react';
import { Classes, Popover2 } from "@blueprintjs/popover2";
import { Button, IconName, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

const NavUser: React.FC = () => (
  <Popover2
    interactionKind="click"
    popoverClassName={Classes.POPOVER2_CONTENT_SIZING}
    placement="bottom-start"
    content={
      <Menu>
        <MenuItem icon="new-text-box" text="New text box" />
        <MenuDivider />
        <MenuItem icon="new-object" text="New object" />
        <MenuDivider />
        <MenuItem icon="new-link" text="New link" />
      </Menu>
    }
    renderTarget={({ isOpen, ref, ...targetProps }) => (
      <Button {...targetProps} elementRef={ref} intent="primary" icon={IconNames.USER}/>
    )}
  />
)

export default NavUser;
