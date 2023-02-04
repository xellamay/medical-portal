import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import classes from "./HomePage.module.scss";
import image from "./images/jai3vqo4376381.jpg"
import BirthdaySection from "./components/birthday-section/BirthdaySection";
import ScheduleSection from "./components/schedule-section/ScheduleSection";
import NewsSection from "./components/news-section/NewsSection";
import Welcome from "@storybook/react/dist/ts3.9/demo/Welcome";
import WelcomeSection from "./components/welcome-section/WelcomeSection";

const HomePage = () => {
  return (
    <>
      <ScheduleSection />
      <NewsSection />
      <WelcomeSection />
      <BirthdaySection />
      <div className={classes.schedule}>
        <Card className={classes.card} interactive={true}>
          <div className={classes.card__heading}>
            <div>Сегодня</div>
            <h5 className={classes.card__title}><a href="#">Рабочее время</a></h5>
          </div>
          <div className={classes.card__content}>
            <p className={classes.card__text}>15:00 - 21:00</p>
            <p className={classes.card__text}>Педиатр</p>
            <p className={classes.card__text}>Ф17-ДЦ, каб.105</p>
          </div>
        </Card>
        <Card className={classes.card} interactive={true}>
          <div className={classes.card__heading}>
            <div>Завтра</div>
            <h5 className={classes.card__title}><a href="#">Рабочее время</a></h5>
          </div>
          <div className={classes.card__content}>
            <p className={classes.card__text}>15:00 - 21:00</p>
            <p className={classes.card__text}>Педиатр</p>
            <p className={classes.card__text}>Ф17-ДЦ, каб.105</p>
          </div>
        </Card>
      </div>

      <div className={classes.news}>
        <div className={classes.news__heading}>
          <div className={classes.news__title}>Новости</div>
          <a href="#">Все новости</a>
        </div>
        <div className={classes.news__content}>
          <Card className={classes.news__card} interactive={true}>
            <div>
              <img className={classes.news__image} src={image} alt="background image"/>
            </div>
            <div className={classes.news__desc}>
              <h5 className={classes.news__chapter}><a href="#">Медицина</a></h5>
              <p className={classes.news__text}>Рана на ноге - от небольшой царапины до язвы</p>
            </div>
          </Card>
          <Card className={classes.news__card} interactive={true}>
            <div>
              <img className={classes.news__image} src={image} alt="background image"/>
            </div>
            <div className={classes.news__desc}>
              <h5 className={classes.news__chapter}><a href="#">Медицина</a></h5>
              <p className={classes.news__text}>Рана на ноге - от небольшой царапины до язвы</p>
            </div>

          </Card>
        </div>


      </div>
    </>
  )
}

export default HomePage
