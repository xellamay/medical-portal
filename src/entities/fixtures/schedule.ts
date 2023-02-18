import { v4 as uuid } from "uuid";
import { Schedule } from "../models";

export const scheduleMonday: Schedule = {
  id: uuid(),
  date: "Сегодня",
  time: "15.00 - 21.00",
  dayOfTheWeek: "Понедельник",
  jobTitle: "Педиатр",
  filial: "ДЦ-17, каб.105",
  workTime: "Рабочее время",
}

export const scheduleTuesday: Schedule = {
  id: uuid(),
  date: "Сегодня",
  time: "15.00 - 21.00",
  dayOfTheWeek: "Понедельник",
  jobTitle: "Педиатр",
  filial: "ДЦ-17, каб.105",
  workTime: "Рабочее время",
}

export const scheduleFixturesList: Schedule[] = [
  scheduleMonday,
  scheduleTuesday
]
