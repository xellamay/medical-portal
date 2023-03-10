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
  const mockById = getMockById(id as string);

  return (
    <Page title={mockById.title}
          image={mockById.previewSrc}>
      <Text>
        {mockById.description}
      </Text>
    </Page>
  )
}

export default NewsPage;
