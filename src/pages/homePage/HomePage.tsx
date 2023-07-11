import React from 'react';
import Slider from "../../components/slider/Slider";
import { slideFixtures } from "../../fixtures/slide";
import NewsList from "../../components/newsList/NewsList";

const HomePage: React.FC = () => (
  <>
    <Slider data={slideFixtures} />
    <NewsList />
  </>
)

export default HomePage;
