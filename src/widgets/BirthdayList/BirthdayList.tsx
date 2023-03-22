import React from 'react';
import { EmployeeCardVertical } from "../../entities/ui";
import Section from "../../entities/ui/section/Section";
import { doctorFixturesList } from "../../entities/fixtures";
import ScrollList from "../../entities/ui/scroll-list/ScrollList";

const BirthdayList: React.FC = () => (
  <Section title="С днем рождения!" subtitle="Перейти в раздел">
    <ScrollList>
      {doctorFixturesList.map((item) => (
        <EmployeeCardVertical
          key={item.id}
          name={item.name}
          lastname={item.lastname}
          surname={item.surname}
          image={item.image}
          jobTitle={item.jobTitle}
          filial={item.filial}
        />)
      )}
    </ScrollList>
  </Section>
)

export default BirthdayList;

