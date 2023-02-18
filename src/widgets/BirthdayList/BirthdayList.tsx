import React from 'react';
import { EmployeeCard } from "../../entities/ui";
import Section from "../../entities/ui/section/Section";
import { doctorFixturesList } from "../../entities/fixtures";

const BirthdayList: React.FC = () => (
  <Section title="С днем рождения!" subtitle="Перейти в раздел">
    {doctorFixturesList.map((item) => (
      <EmployeeCard
        key={item.id}
        name={item.name}
        lastname={item.lastname}
        surname={item.surname}
        image={item.image}
        jobTitle={item.jobTitle}
        filial={item.filial}
      />)
    )}
  </Section>
)

export default BirthdayList;

