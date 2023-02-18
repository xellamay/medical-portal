import React from 'react';
import { ScheduleCard } from "../../entities/ui";
import Section from "../../entities/ui/section/Section";
import { scheduleFixturesList } from "../../entities/fixtures";

const ScheduleList: React.FC = () => (
  <Section>
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
  </Section>
)

export default ScheduleList;
