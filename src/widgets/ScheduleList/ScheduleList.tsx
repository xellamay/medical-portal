import React from 'react';
import { ScheduleCard } from "../../entities/ui";
import Section from "../../entities/ui/section/Section";
import { scheduleFixturesList } from "../../entities/fixtures";
import classes from "./ScheduleList.module.scss"

const ScheduleList: React.FC = () => (
  <Section>
    <div className={classes.schedule}>
      {scheduleFixturesList.map((item) =>
        <ScheduleCard
          key={item.id}
          date={item.date}
          workTime={item.workTime}
          time={item.time}
          jobTitle={item.jobTitle}
          filial={item.filial}
        />
      )}
    </div>
  </Section>
)

export default ScheduleList;
