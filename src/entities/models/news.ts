export enum NewsTypes {
  MEDICINE = "medicine",
  EVENT = "event",
}

export type News = {
  id: string,
  type: `${NewsTypes}`,
  title: string,
  description: string,
  publishDate: string,
  previewSrc: string,
  createdBy: string,
  updatedBy: string,
  created: string,
  updated: string,
}
