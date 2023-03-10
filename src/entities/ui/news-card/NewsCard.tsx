import React from 'react';
import classes from "./NewsCard.module.scss";
import { Card } from "@blueprintjs/core";
import { Text } from "../../../components/text";
import { useHistory } from "react-router-dom";

interface Props {
  id: string,
  image: string,
  type: string,
  title: string,
}

const NewsCard: React.FC<Props> = ({ id, image, type, title }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/news/${id}`)
  }

  return (
    <Card className={classes.newsCard} interactive={true} onClick={handleClick}>
      <div>
        <img className={classes.newsCard__image} src={image} alt={title}/>
      </div>
      <div className={classes.newsCard__desc}>
        <Text className={classes.newsCard__chapter} tagName="div" large>
          <a href="/">
            {type}
          </a>
        </Text>
        <Text tagName="h3" heading>
          {title}
        </Text>
      </div>
    </Card>
  )
}

export default NewsCard;
