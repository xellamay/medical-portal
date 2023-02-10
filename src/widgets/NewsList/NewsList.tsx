import React from "react";
import { Text } from "../../components/text";
import { NewsCard } from "../../entities/ui";
import classes from "./NewsList.module.scss";


const NewsList: React.FC = () => (
  <div className={classes.newsList}>
    <div className={classes.newsList__heading}>
      <Text tagName="h2" heading >
        Новости
      </Text>
      <Text tagName="a" large>
        Все новости
      </Text>
    </div>
    <div className={classes.newsList__content}>
      <NewsCard
        image="https://espanarusa.com/files/autoupload/27/41/7/jai3vqo4376381.jpg"
        type="Медицина"
        title="Рана на ноге - от небольшой царапины до язвы"
      />
      <NewsCard
        image="https://espanarusa.com/files/autoupload/27/41/7/jai3vqo4376381.jpg"
        type="Медицина"
        title="Рана на ноге - от небольшой царапины до язвы"
      />
    </div>
  </div>
)

export default NewsList;
