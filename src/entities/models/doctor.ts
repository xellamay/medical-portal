import { Human } from "./";

export type Doctor = {
  jobTitle: string,
  experience: string,
  filial: string
} & Human;
