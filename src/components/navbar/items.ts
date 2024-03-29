import { v4 as uuid } from 'uuid';
import { ROUT_HOME_PAGE, ROUT_NEWS_PAGE } from "../../routing/routes";

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
    icon: "application",
    text: "Новости",
    href: ROUT_NEWS_PAGE
  },
  {
    id: uuid(),
    type: "item",
    icon: "people",
    text: "Сотрудники",
  },
  {
    id: uuid(),
    type: "item",
    icon: "shopping-cart",
    text: "Предложения партнеров",
  },
  {
    id: uuid(),
    type: "divider",
    icon: "",
    text: "",
  },
  {
    id: uuid(),
    type: "item",
    icon: "cog",
    text: "Тех.поддержка",
  }
]
