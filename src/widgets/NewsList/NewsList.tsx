import React from "react";
import { NewsCard } from "../../entities/ui";
import Section from "../../entities/ui/section/Section";
import { newsFixturesList } from "../../entities/fixtures/news";
import classes from "./NewsList.module.scss"
import { ROUT_NEWS_PAGE } from "../../app/routing/constans";

const NewsList: React.FC = () => (
    <Section title="Новости" subtitle="Все новости" hrefSubtitle={ROUT_NEWS_PAGE}>
      <div className={classes.list}>
        {newsFixturesList.map((item) => (
          <div className={classes.list__item}>
            <NewsCard
              id={item.id}
              key={item.id}
              image={item.previewSrc}
              type={item.type}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </Section>
  )

export default NewsList;
