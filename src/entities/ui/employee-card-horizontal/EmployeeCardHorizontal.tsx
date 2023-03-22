import React from 'react';
import { Card } from "@blueprintjs/core";
import { Text } from "../../../components/text";
import classes from "./EmployeeCardHorizontal.module.scss"

interface Props {
  name: string,
  lastname: string,
  surname: string,
  birthday?: string,
  image: string,
  jobTitle: string,
  filial: string,
  data?: string,
  experience?: string,
  onClick?: () => void,
}

const EmployeeCardHorizontal: React.FC<Props> = ({ onClick, name, surname, lastname, birthday, filial, jobTitle, image, data, experience }) => {
  return (
    <Card className={classes.employee} interactive={true} onClick={onClick}>
      <img className={classes.employee__img} src={image} alt={name}/>
      <div className={classes.employee__name}>
        <Text tagName="div">{`${lastname} ${name} ${surname}`}</Text>
        <Text tagName="div">{`${filial}, ${jobTitle}`}</Text>
        <Text tagName="div">Стаж работы - {experience}</Text>
      </div>
    </Card>
  )
}

export default EmployeeCardHorizontal;
