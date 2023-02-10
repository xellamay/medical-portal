import React from 'react';
import classes from "./ScheduleList.module.scss";
import { ScheduleCard } from "../../entities/ui";

const ScheduleList: React.FC = () => (
  <div className={classes.schedule}>
    <ScheduleCard data="Сегодня"
                  workTime="Рабочее время"
                  time="15.00 - 21.00"
                  jobTitle="Педиатр"
                  filial="ДЦ-17, каб.105"
    />
    <ScheduleCard data="Завтра"
                  workTime="Рабочее время"
                  time="15.00 - 21.00"
                  jobTitle="Педиатр"
                  filial="ДЦ-17, каб.105"
    />
  </div>
)

export default ScheduleList;
