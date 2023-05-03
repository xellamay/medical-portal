import React from 'react';
import { ROUT_HOME_PAGE, ROUT_AUTHORIZATION_PAGE } from "./constans";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import AuthorizationPage from "../pages/authorizationPage/AuthorizationPage";


//TODO: сделать редирект на главную страницу
const Routing: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUT_AUTHORIZATION_PAGE} element={<AuthorizationPage />}  />
      <Route path={ROUT_HOME_PAGE} element={<HomePage />} />
    </Routes>
  </BrowserRouter>
)

export default Routing;
