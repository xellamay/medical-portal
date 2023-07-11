import React from 'react';
import ScrollList from "../scrollList/ScrollList";
import NewsCard from "../newsCard/NewsCard";
import useFetch from "../../hooks/useFetch";

const NewsList: React.FC = () => {
  const { isLoading, isLoaded, isError, data } = useFetch()

  return(
    <ScrollList>
      {isLoading && (
        <p>Загружаю...</p>
      )}
      {isLoaded && (
        <>
          {data.slice(0, 2).map((item) => (
            <NewsCard
              id={item.id}
              key={item.id}
              image={item.previewSrc}
              type={item.type}
              title={item.title}
            />
          ))}
        </>
      )}
      {isError && (
        <p>Не удалось загрузить новости</p>
      )}
    </ScrollList>
  )
}

export default NewsList;
