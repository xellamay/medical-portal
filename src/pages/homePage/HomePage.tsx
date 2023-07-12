import React from 'react';
import Slider from "../../components/slider/Slider";
import { slideFixtures } from "../../fixtures/slide";

const HomePage: React.FC = () => (
  <Slider data={slideFixtures} />
)

export default HomePage;
