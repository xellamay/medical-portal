import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import { newsFixturesPage } from "../entities/fixtures/news";
import { News } from "../entities/models/news";

const mock = new MockAdapter(axios, {
  delayResponse: 100
});

mock.onGet("/news").reply(200, [...newsFixturesPage]);
mock.onGet("/news/:{id}").reply(403, { message: "Новость не найдена"});

const newsApi = {
  async getNews() {
    return axios.get<News[]>("/news")
  }
}

export default newsApi;
