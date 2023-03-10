import React from 'react';
import classes from "./SchedulePage.module.scss"
import Page from "../../entities/ui/page/Page";
import { scheduleFixturesList } from "../../entities/fixtures";
import { ScheduleCard } from "../../entities/ui";

const SchedulePage: React.FC = () => (
    <Page>
      <div className={classes.schedule__content}>
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
    </Page>
)

export default SchedulePage;
