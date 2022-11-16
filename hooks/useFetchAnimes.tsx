import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import getAnimeQuery from "../requests";
import { fetchFunctionToUse } from "../utils/helpers";

const useFetchAnimes = () => {
  const categorie = useSelector((state: any) => state.main.categorie);
  const payload = useSelector((state: any) => state.main.payload);

  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let fetchFun: any = getAnimeQuery.getTrendingAnime;
    switch (categorie) {
      case fetchFunctionToUse.TRENDING: {
        fetchFun = getAnimeQuery.getTrendingAnime;
        break;
      }
      case fetchFunctionToUse.POPULAR: {
        fetchFun = getAnimeQuery.getPopularAnime;
        break;
      }
      case fetchFunctionToUse.SEASON: {
        fetchFun = getAnimeQuery.getSeasonAnime;
        break;
      }
      case fetchFunctionToUse.SEARCH: {
        fetchFun = getAnimeQuery.getSearchedAnime;
        break;
      }
    }
    async function get() {
      setError(null);
      setIsLoading(true);
      await fetchFun(payload)
        .then((response) => {
          if (response.length < 1) {
            throw new Error("no result found");
          }
          setAnimes(response);
        })
        .catch((error) => setError(error));
      setIsLoading(false);
    }
    get();
  }, [categorie, payload]);

  return {
    isLoading,
    animes,
    error,
  };
};

export default useFetchAnimes;
