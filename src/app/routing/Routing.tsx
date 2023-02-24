import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { ROUT_HOME_PAGE, ROUT_NEWS_PAGE } from "./constans";

const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const NewsPage = lazy(() => import("../../pages/newsPage/NewsPage"));

const Routing: React.FC = () => (
  <Switch>
    <Suspense fallback={"Загружаю"}>
      <Route exact path={ROUT_HOME_PAGE} component={HomePage} />
      <Route exact path={ROUT_NEWS_PAGE} component={NewsPage} />

      <Redirect path="/" to={ROUT_HOME_PAGE} />
    </Suspense>
  </Switch>
)

export default Routing;
