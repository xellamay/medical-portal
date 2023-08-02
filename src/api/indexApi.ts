import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import { newsFixturesPage } from "../fixtures/news";
import { News } from "../models/news";

const mock = new MockAdapter(axios, {
  delayResponse: 2000
});

mock.onPost("/auth", { login: "admin", password: "123456" }).reply(200);
mock.onPost("/auth").reply(403, { message: "Не верный логин или пароль"});

type AuthParams = {
  login: string;
  password: string
}

export const authApi = {
  async auth(data: AuthParams) {
    return await axios.post("/auth", data)
  }
}

mock.onGet("/news").reply(200, [...newsFixturesPage]);
mock.onGet("/news/:{id}").reply(403, { message: "Новость не найдена"});

export const newsApi = {
  async getNews() {
    return axios.get<News[]>("/news")
  }
}

