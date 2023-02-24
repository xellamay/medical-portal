import { v4 as uuid } from "uuid";
import { News } from "../models";

export const newsAboutInjury: News = {
  id: uuid(),
  type: "Медицина",
  title: "Рана на ноге - от небольшой царапины до язвы",
  description: "2-го февраля мы предлагали поставить диагноз 13-летней девочке, которая обратилась с порезом на левой ступне, состояние которого ухудшалось. В этом месте была минимально выраженная болезненность, за день до посещения врача у пациентки была субфебрильная температура. При осмотре было обнаружено слабо болезненное язвенное поражение размером 3×3 см на тыльной поверхности левой стопы. Поражение имело приподнятые границы с минимально выраженной окружающей эритемой и уплотнением. Поверх него был струп, но без гнойных выделений. Результаты лабораторных анализов были без патологических отклонений.",
  publishDate: "10.01.2023",
  previewSrc: "https://espanarusa.com/files/autoupload/27/41/7/jai3vqo4376381.jpg",
  createdBy: "Аникеев А.С.",
  updatedBy: "Аникеев А.С.",
  created: "10.01.2023",
  updated: "10.01.2023",
}

export const newsAboutDentistry: News = {
  id: uuid(),
  type: "Медицина",
  title: "Инновации в стоматологии. За чем будущее?",
  description: "9 февраля во всем мире отмечают День стоматолога. Мы сердечно поздравляем наших врачей, пусть ваша профессиональная деятельность будет яркой, долгой и динамичной. Желаем успехов и новых достижений!\n" +
    "\n" +
    "Сегодня стоматология является одним из самых высокотехнологичных, быстроразвивающихся и перспективных отраслей медицины. Изменения в этой сфере происходят постоянно: появляются новые методики и материалы, совершенствуется оборудование. \n" +
    "\n" +
    "Использование инноваций обеспечивает конкурентное преимущество и большую привлекательность для взыскательных пациентов. \n" +
    "\n" +
    "Наша Компания внимательно следит за новинками и трендами в мире стоматологических услуг. Многие из которых уже внедрены в поликлиниках Сети. ",
  publishDate: "10.01.2023",
  previewSrc: "https://phonoteka.org/uploads/posts/2021-06/1624727121_24-phonoteka_org-p-meditsinskie-oboi-krasivo-29.jpg",
  createdBy: "Аникеев А.С.",
  updatedBy: "Аникеев А.С.",
  created: "10.01.2023",
  updated: "10.01.2023",
}

export const newsFixturesList: News[] = [
  newsAboutInjury,
  newsAboutDentistry,
]

export const newsFixturesPage: News[] = [
  newsAboutInjury,
  newsAboutDentistry,
  newsAboutInjury,
  newsAboutDentistry,
  newsAboutInjury,
  newsAboutDentistry,
  newsAboutInjury,
  newsAboutDentistry,
  newsAboutInjury,
  newsAboutDentistry,
  newsAboutInjury,
  newsAboutDentistry,
  newsAboutInjury,
  newsAboutDentistry,
  newsAboutInjury,
  newsAboutDentistry,
  newsAboutInjury,
  newsAboutDentistry,
]
