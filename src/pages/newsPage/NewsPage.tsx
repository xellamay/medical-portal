import React from 'react';
import { NewsCard } from "../../entities/ui";
import { newsFixturesPage } from "../../entities/fixtures/news";
import Page from "../../entities/ui/page/Page";
import classes from "./NewsPage.module.scss"

const NewsPage: React.FC = () => (
  <Page>
    <div className={classes.news}>
      {newsFixturesPage.map((item) => (
        <NewsCard
          key={item.id}
          image={item.previewSrc}
          type={item.type}
          title={item.title}
        />
      ))}
    </div>
  </Page>
)

export default NewsPage;
