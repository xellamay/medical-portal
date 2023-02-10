import React from 'react';
import classes from "./NewsCard.module.scss";
import { Card } from "@blueprintjs/core";
import { Text } from "../../../components/text";

interface Props {
  image: string,
  type: string,
  title: string,
}

const NewsCard: React.FC<Props> = ({ image, type, title }) => (
  <Card className={classes.newsCard} interactive={true}>
    <div>
      <img className={classes.newsCard__image} src={image} alt={title} />
    </div>
    <div className={classes.newsCard__desc}>
      <Text className={classes.newsCard__chapter} tagName="div" large>
        <a href="#">
          {type}
        </a>
      </Text>
      <Text tagName="h3" heading>
        {title}
      </Text>
    </div>
  </Card>
)

export default NewsCard;
