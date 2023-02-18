import React from 'react';
import { Button, ButtonGroup } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons"

const NavbarActions: React.FC = () => {
  const handleClickCloud = () => {
    console.log("CLICK ON THE CLOUD");
  }

  const handleTimeline = () => {
    console.log("CLICK ON THE TIMELINE");
  }

  const handleClickDocuments = () => {
    console.log("CLICK ON THE DOCUMENTS");
  }

  return (
    <ButtonGroup large minimal>
      <Button icon={IconNames.CLOUD} onClick={handleClickCloud} />
      <Button icon={IconNames.TIMELINE_EVENTS} onClick={handleTimeline} />
      <Button icon={IconNames.DOCUMENT} onClick={handleClickDocuments} />
    </ButtonGroup>
  );
}

export default NavbarActions;
