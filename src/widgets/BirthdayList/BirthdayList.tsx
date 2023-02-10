import React from 'react';
import classes from "./BirthdayList.module.scss";
import { Text } from "../../components/text";
import { EmployeeCard } from "../../entities/ui";

const BirthdayList: React.FC = () => (
  <div className={classes.birthdayList}>
    <div className={classes.birthdayList__heading}>
      <Text tagName="h2" heading >
        С днем рождения!
      </Text>
      <Text tagName="a" large>
        Перейти в раздел
      </Text>
    </div>
    <div className={classes.birthdayList__content}>
      <EmployeeCard name="Антон"
                    lastname="Бредиков"
                    surname="Александрович"
                    image="https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg"
                    jobTitle="Доктор"
                    filial="ДЦ_17"
                    data="Завтра"
      />
      <EmployeeCard name="Антон"
                    lastname="Бредиков"
                    surname="Александрович"
                    image="https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg"
                    jobTitle="Доктор"
                    filial="ДЦ_17"
                    data="Завтра"
      />
      <EmployeeCard name="Антон"
                    lastname="Бредиков"
                    surname="Александрович"
                    image="https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg"
                    jobTitle="Доктор"
                    filial="ДЦ_17"
                    data="Завтра"
      />
      <EmployeeCard name="Антон"
                    lastname="Бредиков"
                    surname="Александрович"
                    image="https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg"
                    jobTitle="Доктор"
                    filial="ДЦ_17"
                    data="Завтра"
      />
      <EmployeeCard name="Антон"
                    lastname="Бредиков"
                    surname="Александрович"
                    image="https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg"
                    jobTitle="Доктор"
                    filial="ДЦ_17"
                    data="Завтра"
      />
      <EmployeeCard name="Антон"
                    lastname="Бредиков"
                    surname="Александрович"
                    image="https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg"
                    jobTitle="Доктор"
                    filial="ДЦ_17"
                    data="Завтра"
      />
      <EmployeeCard name="Антон"
                    lastname="Бредиков"
                    surname="Александрович"
                    image="https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg"
                    jobTitle="Доктор"
                    filial="ДЦ_17"
                    data="Завтра"
      />
    </div>
  </div>
)

export default BirthdayList;
