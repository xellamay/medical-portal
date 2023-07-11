import React from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import Text from "../text/Text";
import classes from "./NewsCard.module.scss"

interface Props {
  id: string,
  title: string,
  type: string,
  image: string,
}

const NewsCard: React.FC<Props> = ({ image, title, type, id}) => (
  <Card className={classes.card} interactive={true} elevation={Elevation.ONE}>
    <div>
      <img className={classes.card__image} src={image} alt={title} />
    </div>
    <div className={classes.card__desc}>
      <Text className={classes.card__chapter} tagName="div" large>
        {type}
      </Text>
      <Text tagName="h3" heading>
        {title}
      </Text>
    </div>
  </Card>
)

export default NewsCard;
