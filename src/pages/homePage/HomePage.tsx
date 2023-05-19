import React from 'react';
import Slider from "../../components/slider/Slider";
import NewsList from "../../widgets/newsList/NewsList";
import Section from "../../entities/ui/section/Section";

const HomePage: React.FC = () => (
  <>
    <Section>
      <Slider />
    </Section>
    <NewsList />
  </>
)

export default HomePage;
