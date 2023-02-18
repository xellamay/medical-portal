import React from 'react';
import classes from "./SheduleCard.module.scss";
import { Card } from "@blueprintjs/core";
import { Text } from "../../../components/text";

interface Props {
  date: string,
  workTime: string,
  time?: string,
  jobTitle?: string,
  filial?: string,
}

const ScheduleCard: React.FC<Props> = ({ date, workTime, time, filial, jobTitle }) => (
  <Card className={classes.card} interactive={true}>
    <div className={classes.card__heading}>
      <Text tagName="div">
        {date}
      </Text>
      <Text className={classes.card__title} tagName="h5" heading>
        <a href="#">{workTime}</a>
      </Text>
    </div>
    <div className={classes.card__content}>
      <Text className={classes.card__text} tagName="div">
        {time}
      </Text>
      <Text className={classes.card__text} tagName="div">
        {jobTitle}
      </Text>
      <Text className={classes.card__text} tagName="div">
        {filial}
      </Text>
    </div>
  </Card>
)

export default ScheduleCard;
