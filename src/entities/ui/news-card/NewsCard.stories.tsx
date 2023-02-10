import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NewsCard from './NewsCard';

export default {
  title: 'NewsCard',
  component: NewsCard,
} as ComponentMeta<typeof NewsCard>;

const Template: ComponentStory<typeof NewsCard> = (args) => <NewsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://espanarusa.com/files/autoupload/27/41/7/jai3vqo4376381.jpg",
  title: "Рана на ноге - от небольшой царапины до язвы",
  type: "Медицина",
};
