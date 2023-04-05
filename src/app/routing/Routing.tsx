import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import {
  ROUT_AUTHORIZATION_PAGE,
  ROUT_EMPLOYEES_LIST_PAGE,
  ROUT_HOME_PAGE,
  ROUT_NEWS_LIST_PAGE,
  ROUT_NEWS_PAGE,
  ROUT_SCHEDULE_PAGE
} from "./constans";

const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const NewsListPage = lazy(() => import("../../pages/newsListPage/NewsListPage"));
const SchedulePage =  lazy(() => import("../../pages/schedulePage/SchedulePage"));
const NewsPage = lazy(() => import("../../pages/newsPage/NewsPage"));
const EmployeesListPage = lazy(() => import("../../pages/employeesListPage/employeesListPage"));
const AuthorizationPage = lazy(() => import("../../pages/authorizationPage/AuthorizationPage"));

const Routing: React.FC = () => (
  <Switch>
    <Suspense fallback={"Загружаю..."}>
      <Route exact path={ROUT_HOME_PAGE} component={HomePage} />
      <Route exact path={ROUT_NEWS_LIST_PAGE} component={NewsListPage} />
      <Route exact path={ROUT_SCHEDULE_PAGE} component={SchedulePage} />
      <Route exact path={ROUT_NEWS_PAGE} component={NewsPage} />
      <Route exact path={ROUT_EMPLOYEES_LIST_PAGE} component={EmployeesListPage} />
      <Route exact path={ROUT_AUTHORIZATION_PAGE} component={AuthorizationPage} />

      {/* TODO: при перезагрузке страницы при переходе на другую страницу необходимо два клика, с первого остается на главной*/}
      {/*<Redirect path="/" to={ROUT_HOME_PAGE} />*/}
    </Suspense>
  </Switch>
)

export default Routing;
