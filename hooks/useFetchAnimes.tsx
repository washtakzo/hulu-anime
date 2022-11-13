import React, { useEffect, useState } from "react";
import { FormatedAnimes } from "../types";
import { useSelector } from "react-redux";
import getAnimeQuery from "../requests";
import { AnimeSections } from "../utils/classes";

const useFetchAnimes = () => {
  const categorie = useSelector((state: any) => state.main.categorie);
  const payload = useSelector((state: any) => state.main.payload);
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState(null);

  const handleDataAnime = (animes) => {
    setAnimes(animes);
    setIsLoading(false);
  };

  async function get() {
    switch (categorie) {
      case AnimeSections.TRENDING: {
        const data = await getAnimeQuery.getTrendingAnime();
        handleDataAnime(data);
        break;
      }
      case AnimeSections.POPULAR: {
        const data = await getAnimeQuery.getPopularAnime();
        handleDataAnime(data);
        break;
      }
      case AnimeSections.SEARCH_ANIME: {
        const data = await getAnimeQuery.getSearchedAnime(payload.animeName);
        handleDataAnime(data);
        break;
      }
      case AnimeSections.SEASON: {
        console.log({ payload });
        const data = await getAnimeQuery.getSeasonAnime(2015);
        handleDataAnime(data);
        break;
      }
    }
  }
  useEffect(() => {
    setError(null);
    setIsLoading(true);
    get().catch((error) => {
      setError(error);
      setIsLoading(false);
    });
  }, [categorie]);

  return {
    isLoading,
    animes,
    error,
  };
};

export default useFetchAnimes;
