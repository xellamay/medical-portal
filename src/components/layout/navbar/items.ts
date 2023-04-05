import { v4 as uuid } from "uuid";
import {
  ROUT_AUTHORIZATION_PAGE,
  ROUT_EMPLOYEES_LIST_PAGE,
  ROUT_HOME_PAGE,
  ROUT_NEWS_LIST_PAGE,
  ROUT_SCHEDULE_PAGE
} from "../../../app/routing/constans";


export const navItems = [
  {
    id: uuid(),
    type: "item",
    icon: "home",
    text: "Главная",
    href: ROUT_HOME_PAGE
  },
  {
    id: uuid(),
    type: "item",
    icon: "calendar",
    text: "График работы",
    href: ROUT_SCHEDULE_PAGE
  },
  {
    id: uuid(),
    type: "item",
    icon: "application",
    text: "Новости",
    href: ROUT_NEWS_LIST_PAGE
  },
  {
    id: uuid(),
    type: "item",
    icon: "people",
    text: "Сотрудники",
    href: ROUT_EMPLOYEES_LIST_PAGE
  },
  {
    id: uuid(),
    type: "item",
    icon: "new-person",
    text: "Авторизация на странице",
    href: ROUT_AUTHORIZATION_PAGE
  },
  {
    id: uuid(),
    type: "item",
    icon: "shopping-cart",
    text: "Предложения партнеров"
  },
  {
    id: uuid(),
    type: "divider",
    icon: "",
    text: ""
  },
  {
    id: uuid(),
    type: "item",
    icon: "annotation",
    text: "База знаний"
  },
  {
    id: uuid(),
    type: "item",
    icon: "help",
    text: "Служба поддержки"
  }
]
