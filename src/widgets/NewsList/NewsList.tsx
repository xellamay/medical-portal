import React from "react";
import { NewsCard } from "../../entities/ui";
import Section from "../../entities/ui/section/Section";
import { newsFixturesList } from "../../entities/fixtures/news";

const NewsList: React.FC = () => (
    <Section title="Новости" subtitle="Все новости">
      {newsFixturesList.map((item) => (
        <NewsCard
          key={item.id}
          image={item.previewSrc}
          type={item.type}
          title={item.title}
        />
      ))}
    </Section>
  )

export default NewsList;
