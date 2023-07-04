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

SwiperCore.use([Autoplay]);

type Slide = {
  id: string,
  image: string,
  title: string,
  subtitle: string,
  textBtn: string,
}

interface Props {
  data: Slide[]
}

const Slider: React.FC<Props> = ({ data}) => {
  const navigate = useNavigate();

  const handleClick = (href: string | undefined) => {
    if (href) {
      navigate(href)
    }
  }

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
      {data.map(item => (
        <SwiperSlide key={item.id}>
          <img
            className={classes.slider__image}
            src={item.image}
            alt={item.title}
          />
          <div className={classes.slider__content}>
            <Text
              className={classes.slider__title}
              tagName="h2"
              heading
            >
              {item.title}
            </Text>
            <Text className={classes.slider__subtitle}>
              {item.subtitle}
            </Text>
            <Button
              text={item.textBtn}
              intent={Intent.NONE}
              outlined
              large
              onClick={() => handleClick(ROUT_NEWS_PAGE)}
            />
          </div>
        </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Slider;
