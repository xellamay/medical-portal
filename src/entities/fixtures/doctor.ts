import { Doctor } from "../models";

export const doctorVorobyev: Doctor = {
  id: "b698fac1-07e3-4570-8276-23adae4dfa75",
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
  id: "00448fc6-cb7a-4371-ab2c-99d85a7e4ae0",
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
  id:"5e1a8912-08f7-4ebe-8d79-566fd8937782",
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
  id: "6322390c-2b00-4fe5-892b-3523c5a66dd7",
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

export const doctorZaicev: Doctor = {
  id: "24afd714-8944-4c75-b9de-da3e8346a8f0",
  name: "Олег",
  lastname: "Зайцев",
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

export const doctorOrlova: Doctor = {
  id: "51813640-782d-42d5-87d1-7b7ac12ac197",
  name: "Анна",
  lastname: "Орлова",
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

export const doctorNaheeva: Doctor = {
  id: "cf86d368-cef8-438b-bf31-4324950aad10",
  name: "Софья",
  lastname: "Нахеева",
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

export const doctorPetrov: Doctor = {
  id: "c3e705b0-e19e-43a5-9f2e-a67e00d26447",
  name: "Петров",
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
  doctorOrlova,
  doctorPetrov,
  doctorNaheeva,
  doctorZaicev
]

export const getMockById = (id: Doctor["id"]) => {
  const currentDoctor = doctorFixturesList.filter((doctor) => doctor.id === id);
  return currentDoctor[0];
}
