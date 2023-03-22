import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmployeeCardVertical from './EmployeeCardVertical';

export default {
  title: 'EmployeeCardVertical',
  component: EmployeeCardVertical,
} as ComponentMeta<typeof EmployeeCardVertical>;

const Template: ComponentStory<typeof EmployeeCardVertical> = (args) => <EmployeeCardVertical {...args} />;

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
