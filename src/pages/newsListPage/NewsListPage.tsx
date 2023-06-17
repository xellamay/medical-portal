import React, { useEffect, useState } from 'react';
import Page from "../../entities/ui/page/Page";
import classes from "./NewsListPage.module.scss"
import NewsCard from "../../entities/ui/newsСard/NewsCard";
import newsApi from "../../api/news";
import { News } from "../../entities/models/news";

enum LoadingState {
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

const NewsListPage: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [state, setState] = useState<LoadingState>(LoadingState.Loading);

  const onLoad = async () => {
    try {
      setState(LoadingState.Loading);
      const res = await newsApi.getNews();
      setNews(res.data);
      setState(LoadingState.Loaded);
    } catch (e) {
      setState(LoadingState.Error);
    }
  }

  useEffect(() => {
    void onLoad();
  }, []);

  return (
    <Page>
      {state === LoadingState.Loading && (
        <p>Загружаю...</p>
      )}
      {state === LoadingState.Loaded && (
        <div className={classes.news}>
          {news.map((item) => (
            <NewsCard
              id={item.id}
              key={item.id}
              image={item.previewSrc}
              type={item.type}
              title={item.title}
            />
          ))}
        </div>
      )}
      {state === LoadingState.Error && (
        <p>Не удалось загрузить новости</p>
      )}
    </Page>
  )
}

export default NewsListPage;
