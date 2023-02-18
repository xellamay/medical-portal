import { v4 as uuid } from "uuid";
import { Doctor } from "../models";

export const doctorVorobyev: Doctor = {
  id: uuid(),
  name: "Олег",
  lastname: "Хайтурин",
  surname: "Сергеевич",
  birthday: "21.04.1984",
  age: 34,
  male: "man",
  image: "https://cdn.create.vista.com/api/media/small/39307949/stock-photo-doctor",
  jobTitle: "Доктор",
  experience: "2 года",
  filial: "ДЦ-17",
  dateRecruitment: "15.02.2023"
}

export const doctorMankeeva: Doctor = {
  id: uuid(),
  name: "Анна",
  lastname: "Манкеева",
  surname: "Сергеевна",
  birthday: "21.04.1984",
  age: 34,
  male: "woman",
  image: "https://static8.depositphotos.com/1046751/1036/i/950/depositphotos_10365948-stock-photo-attractive-woman-doctor-isolated-on.jpg",
  jobTitle: "Доктор",
  experience: "3 года",
  filial: "ДЦ-17",
  dateRecruitment: "15.02.2023"
}

export const doctorBakulina: Doctor = {
  id: uuid(),
  name: "Софья",
  lastname: "Бакулина",
  surname: "Анатольевна",
  birthday: "21.04.1984",
  age: 34,
  male: "woman",
  image: "https://thumbs.dreamstime.com/b/%D1%84%D0%BE%D1%80%D0%BC%D0%B0-%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D1%81%D0%BE%D0%B4%D1%80%D1%83%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-16902780.jpg",
  jobTitle: "Доктор",
  experience: "1 год",
  filial: "ДЦ-17",
  dateRecruitment: "15.02.2023"
}

export const doctorTihonov: Doctor = {
  id: uuid(),
  name: "Максим",
  lastname: "Тихонов",
  surname: "Александрович",
  birthday: "21.04.1984",
  age: 34,
  male: "man",
  image: "https://cdn.create.vista.com/api/media/small/135128142/stock-photo-doctor-holding-clipboard",
  jobTitle: "Доктор",
  experience: "2 года",
  filial: "ДЦ-17",
  dateRecruitment: "15.02.2023"
}

export const doctorFixturesList: Doctor[] = [
  doctorBakulina,
  doctorMankeeva,
  doctorVorobyev,
  doctorTihonov,
  doctorBakulina,
  doctorMankeeva,
  doctorVorobyev,
  doctorTihonov,
  doctorBakulina,
  doctorMankeeva,
  doctorVorobyev,
  doctorTihonov,
]
