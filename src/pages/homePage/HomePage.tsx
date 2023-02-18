import React from "react";
import BirthdaySection from "./components/BirthdaySection";
import ScheduleSection from "./components/ScheduleSection";
import NewsSection from "./components/NewsSection";
import WelcomeSection from "./components/WelcomeSection";

const HomePage = () => (
  <>
    <ScheduleSection/>
    <NewsSection/>
    <WelcomeSection/>
    <BirthdaySection/>
  </>
)

export default HomePage
