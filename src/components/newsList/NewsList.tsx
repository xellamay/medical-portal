import React from 'react';
import NewsCard from "../newsCard/NewsCard";
import useFetch from "../../hooks/useFetch";
import classes from "./NewsList.module.scss"

const NewsList: React.FC = () => {
  const { isLoading, isLoaded, isError, data } = useFetch()

  return(
    <div className={classes.list}>
      {isLoading && (
        <p>Загружаю...</p>
      )}
      {isLoaded && (
        <>
          {data.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className={classes.list__item}
            >
              <NewsCard
                image={item.previewSrc}
                type={item.type}
                title={item.title}
              />
            </div>
          ))}
        </>
      )}
      {isError && (
        <p>Не удалось загрузить новости</p>
      )}
    </div>
  )
}

export default NewsList;
