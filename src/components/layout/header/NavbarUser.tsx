import React from 'react';
import { Button, Menu, MenuDivider, MenuItem, Popover, PopoverPosition } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

const NavbarUser: React.FC = () => (
  <Popover
    target={
      <Button icon={IconNames.USER} large minimal />
    }
    content={
      <Menu>
        <MenuItem icon="new-text-box" text="New text box" />
        <MenuDivider />
        <MenuItem icon="new-object" text="New object" />
        <MenuDivider />
        <MenuItem icon="new-link" text="New link" />
      </Menu>
    }
    placement={PopoverPosition.BOTTOM}
  />
)

export default NavbarUser;
