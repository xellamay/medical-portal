import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from "./Slider.module.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import Text from "../text/Text";
import { Button, Intent } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import { ROUT_NEWS_PAGE } from "../../routing/routes";

const Slider: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (href: string | undefined) => {
    if (href) {
      navigate(href)
    }
  }

  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      className={classes.slider}
      modules={[Pagination, Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img
          className={classes.slider__image}
          src="https://thumbs.dreamstime.com/b/vista-superior-del-escritorio-m%C3%A9dico-con-port%C3%A1til-herramientas-de-trabajo-equipo-concepto-medicina-moderna-197529833.jpg"
          alt="фоновая картинка"
        />
        <div className={classes.slider__content}>
          <Text
            className={classes.slider__title}
            tagName="h2"
            heading
          >
            Посмотрите новые предложения
          </Text>
          <Text className={classes.slider__subtitle}>
            от наших партеров
          </Text>
          <Button
            text="Перейти"
            intent={Intent.NONE}
            outlined
            large
            onClick={() => handleClick(ROUT_NEWS_PAGE)}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={classes.slider__image}
          src="https://img.freepik.com/free-photo/top-view-of-stethoscope-with-syringe-and-pills_23-2148533514.jpg"
          alt="фоновая картинка"
        />
        <div className={classes.slider__content}>
          <Text
            className={classes.slider__title}
            tagName="h2"
            heading
          >
            Кэшбек при каждой покупке
          </Text>
          <Text className={classes.slider__subtitle}>
            выгода до 5000р!
          </Text>
          <Button
            text="Перейти"
            intent={Intent.NONE}
            outlined
            large
            onClick={() => handleClick(ROUT_NEWS_PAGE)}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={classes.slider__image}
          src="https://img.freepik.com/free-photo/top-view-medicine-and-clipboard-arrangement_23-2149341568.jpg"
          alt="фоновая картинка"
        />
        <div className={classes.slider__content}>
          <Text
            className={classes.slider__title}
            tagName="h2"
            heading
          >
            Еще какое-то предложение
          </Text>
          <Text className={classes.slider__subtitle}>
            прям ваууу
          </Text>
          <Button
            text="Перейти"
            intent={Intent.NONE}
            outlined
            large
            onClick={() => handleClick(ROUT_NEWS_PAGE)}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider;
