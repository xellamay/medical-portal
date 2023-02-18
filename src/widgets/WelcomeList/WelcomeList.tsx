import React from 'react';
import { EmployeeCard } from "../../entities/ui";
import Section from "../../entities/ui/section/Section";
import { doctorFixturesList } from "../../entities/fixtures";

const WelcomeList: React.FC = () => (
  <Section title="Добро пожаловать!" subtitle="Перейти в раздел">
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

export default WelcomeList;
