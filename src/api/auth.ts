import axios from 'axios';
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, {
  delayResponse: 2000
});

mock.onPost("/auth", { login: "admin", password: "123456" }).reply(200);
mock.onPost("/auth").reply(403, { message: "Не верный логин или пароль"});

type AuthParams = {
  login: string;
  password: string
}

const authApi = {
  async auth(data: AuthParams) {
    return await axios.post("/auth", data)
  }
}

export default authApi;
