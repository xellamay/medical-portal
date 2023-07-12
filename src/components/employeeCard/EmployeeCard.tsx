import React from 'react';
import { Card } from "@blueprintjs/core";
import Text from "../text/Text";
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
    onClick?: () => void,
}

const EmployeeCard: React.FC<Props> = ({ onClick, name, surname, lastname, birthday, filial, jobTitle, image, data }) => {
    return (
        <Card className={classes.employee} interactive={true} onClick={onClick}>
            <img className={classes.employee__img} src={image} alt={name}/>
            <div className={classes.employee__name}>
                <Text tagName="div">{lastname}</Text>
                <Text tagName="div">{name}</Text>
                <Text tagName="div">{surname}</Text>
                <Text tagName="div">{`${filial}, ${jobTitle}`}</Text>
                <Text tagName="div">{data}</Text>
            </div>
        </Card>
    )
}

export default EmployeeCard;