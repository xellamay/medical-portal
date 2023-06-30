import { ROUT_NEWS_PAGE } from "../routing/routes";
import { Slide } from "../models/slide";

export const slideAboutPromotion: Slide = {
  id: "1e802500-83a6-470f-9bcf-c516a71a341d",
  title: "Посмотрите новые предложения",
  subtitle: "от наших партеров",
  textBtn: "Перейти",
  image: "https://thumbs.dreamstime.com/b/vista-superior-del-escritorio-m%C3%A9dico-con-port%C3%A1til-herramientas-de-trabajo-equipo-concepto-medicina-moderna-197529833.jpg",
  href: ROUT_NEWS_PAGE
}

export const slideAboutOffer: Slide = {
  id: "215c57fa-18f5-4e57-a00b-bcba244063d9",
  title: "Кэшбек при каждой покупке",
  subtitle: "выгода до 5000р!",
  textBtn: "Перейти",
  image: "https://img.freepik.com/free-photo/top-view-of-stethoscope-with-syringe-and-pills_23-2148533514.jpg",
}

export const slideAboutAction: Slide = {
  id: "24ea4334-ce02-4c4e-83f5-b2408b50cef0",
  title: "Еще какое-то предложение",
  subtitle: "прям ваууу",
  textBtn: "Перейти",
  image: "https://img.freepik.com/free-photo/top-view-medicine-and-clipboard-arrangement_23-2149341568.jpg",
}

export const slideFixtures: Slide[] = [
  slideAboutPromotion,
  slideAboutOffer,
  slideAboutAction,
]
