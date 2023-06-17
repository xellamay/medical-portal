import React from 'react';
import Section from "../../entities/ui/section/Section";
import NewsCard from "../../entities/ui/newsСard/NewsCard";
import classes from "./NewsList.module.scss";
import SectionHeading from "../../entities/ui/sectionHeading/SectionHeading";
import { ROUT_NEWS_PAGE } from "../../routing/routes";
import { newsFixturesPage } from "../../entities/fixtures/news";


const NewsList: React.FC = () => {
  return (
    <Section>
      <SectionHeading title="Новости" subtitle="Все новости" link={ROUT_NEWS_PAGE} />
      <div className={classes.list}>
        {newsFixturesPage.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className={classes.list__item}
          >
            <NewsCard
              id={item.id}
              image={item.previewSrc}
              type={item.type}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default NewsList;
