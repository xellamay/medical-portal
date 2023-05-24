import React from 'react';
import { newsFixturesPage } from "../../entities/fixtures/news";
import Page from "../../entities/ui/page/Page";
import classes from "./NewsListPage.module.scss"
import NewsCard from "../../entities/ui/news-card/NewsCard";

const NewsListPage: React.FC = () => (
  <Page>
    <div className={classes.news}>
      {newsFixturesPage.map((item) => (
        <NewsCard
          id={item.id}
          key={item.id}
          image={item.previewSrc}
          type={item.type}
          title={item.title}
        />
      ))}
    </div>
  </Page>
)

export default NewsListPage;
