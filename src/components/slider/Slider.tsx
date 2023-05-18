import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from "./Slider.module.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import { slideFixtures } from "../../entities/fixtures/slide";
import { Text } from "../text";
import { Button, Intent } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";

const Slider: React.FC = () => {
  const history = useNavigate();

  const handleClick = (href: string | undefined) => {
    if (href) {
      history(href)
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
      {slideFixtures.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            className={classes.slider__image}
            src={item.image}
            alt="фоновая картинка"
          />
          <div className={classes.slider__content}>
            <Text
              className={classes.slider__title}
              tagName="h2"
              heading
            >
              {item.title}
            </Text>
            {item.subtitle && (
              <Text className={classes.slider__subtitle}>
                {item.subtitle}
              </Text>
            )}
            <Button
              text={item.textBtn}
              intent={Intent.NONE}
              outlined
              large
              onClick={() => handleClick(item.href)}
            />
          </div>
        </SwiperSlide>
      ))
      }
    </Swiper>
  )
}

export default Slider;
