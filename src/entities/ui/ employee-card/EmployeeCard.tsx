import React from 'react';
import { Card } from "@blueprintjs/core";
import { Text } from "../../../components/text";
import classes from "./EmployeeCard.module.scss"

interface Props {
  name: string,
  lastname: string,
  surname: string,
  birthday?: string,
  image: string,
  jobTitle: string,
  filial: string,
  data?: string,
}

const EmployeeCard: React.FC<Props> = ({ name, surname, lastname, birthday, filial, jobTitle, image, data }) => (
    <Card className={classes.employee}>
      <img className={classes.employee__img} src={image} alt={name}/>
      <div className={classes.employee__name}>
        {/* TODO: если все текста собираешься как div делать, то можешь в компоненте сделать div по умолчанию */}
        <Text tagName="div">{lastname}</Text>
        <Text tagName="div">{name}</Text>
        <Text tagName="div">{surname}</Text>
        <Text tagName="div">{`${filial}, ${jobTitle}`}</Text>
        <Text tagName="div">{data}</Text>
      </div>
    </Card>
)

export default EmployeeCard;
