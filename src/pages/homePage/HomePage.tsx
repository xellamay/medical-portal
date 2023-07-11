import React from 'react';
import Slider from "../../components/slider/Slider";
import { slideFixtures } from "../../fixtures/slide";
import NewsList from "../../components/newsList/NewsList";
import Section from "../../components/section/Section";
import Heading from "../../components/heading/Heading";
import { ROUT_NEWS_PAGE } from "../../routing/routes";

const HomePage: React.FC = () => (
  <>
    <Slider data={slideFixtures} />
    <Section >
      <Heading title="Новости" subtitle="Все новости" link={ROUT_NEWS_PAGE}/>
      <NewsList />
    </Section>
  </>
)

export default HomePage;
