import React from 'react';
import Page from "../../entities/ui/page/Page";
import { Text } from "../../components/text";
import { useParams } from "react-router-dom";
import { getMockById } from "../../entities/fixtures/news";

interface UrlParams {
  id: string
}

const NewsPage: React.FC = () => {
  const { id } = useParams<UrlParams>();
  const news = getMockById(id as string);

  if (!news) {
   return <Text>Новость не найдена</Text>
  }

  return (
    <Page title={news.title}
          image={news.previewSrc}>
      <Text>
        {news.description}
      </Text>
    </Page>
  )
}

export default NewsPage;
