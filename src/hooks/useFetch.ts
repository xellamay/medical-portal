import { useEffect, useState } from "react";
import { newsApi } from "../api/indexApi";
import { News } from "../models/news";

enum LoadingState {
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

const useFetch = () => {
  const [state, setState] = useState<LoadingState>(LoadingState.Loading);
  const [data, setData] = useState<News[]>([]);

  const onLoad = async () => {
    try {
      setState(LoadingState.Loading);
      const res = await newsApi.getNews();
      setData(res.data);
      setState(LoadingState.Loaded);
    } catch (e) {
      setState(LoadingState.Error);
      console.log(e)
    }
  }

  useEffect(() => {
    void onLoad();
  }, []);

  return {
    isLoading: state === LoadingState.Loading,
    isLoaded: state === LoadingState.Loaded,
    isError: state === LoadingState.Error,
    data: data,
  }
}

export default useFetch;
