import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmployeeCard from './EmployeeCard';

export default {
  title: 'EmployeeCard',
  component: EmployeeCard,
} as ComponentMeta<typeof EmployeeCard>;

const Template: ComponentStory<typeof EmployeeCard> = (args) => <EmployeeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg",
  name: "Абра",
  lastname: "Кадабра",
  surname: "Кадабровна",
  birthday: "21.03.1976",
  jobTitle: "Доктор",
  filial: "ДЦ-17",
  data: "Сегодня",
};
