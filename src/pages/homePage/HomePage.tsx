import React from "react";
import BirthdaySection from "./components/birthday-section/BirthdaySection";
import ScheduleSection from "./components/schedule-section/ScheduleSection";
import NewsSection from "./components/news-section/NewsSection";
import WelcomeSection from "./components/welcome-section/WelcomeSection";

const HomePage = () => {
  return (
    <>
      <ScheduleSection />
      <NewsSection />
      <WelcomeSection />
      <BirthdaySection />
    </>
  )
}

export default HomePage
