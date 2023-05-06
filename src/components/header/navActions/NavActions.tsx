import React from 'react';
import { Button, ButtonGroup } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

const NavActions: React.FC = () => {
  const handleClickCloud = () => {
    console.log("click on cloud")
  }
  const handleTimeline = () => {
    console.log("click on time")
  }
  const handleClickDocuments = () => {
    console.log("click on doc")
  }

  return (
    <ButtonGroup large minimal>
      <Button icon={IconNames.CLOUD} onClick={handleClickCloud}/>
      <Button icon={IconNames.TIMELINE_EVENTS} onClick={handleTimeline}/>
      <Button icon={IconNames.DOCUMENT} onClick={handleClickDocuments}/>
    </ButtonGroup>
  )
}

export default NavActions;
