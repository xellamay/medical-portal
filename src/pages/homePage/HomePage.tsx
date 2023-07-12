import React from 'react';
import Slider from "../../components/slider/Slider";
import { slideFixtures } from "../../fixtures/slide";
import EmployeeCard from "../../components/employeeCard/EmployeeCard";

const HomePage: React.FC = () => (
  <Slider data={slideFixtures} />
)

export default HomePage;
