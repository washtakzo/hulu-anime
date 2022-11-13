import React, { useEffect, useState } from "react";
import { FormatedAnimes } from "../types";
import { useSelector } from "react-redux";

// getAnimeFunction: () => Promise<FormatedAnimes>
const useFetchAnimes = () => {
  const categorie = useSelector((state: any) => state.main.categorie); //source d'erreur
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState(null);

  async function get() {
    const data = await categorie();
    setAnimes(data);
    setIsLoading(false);
  }
  useEffect(() => {
    setError(null);
    setIsLoading(true);
    try {
      get();
    } catch (error) {
      console.warn("useFetchAnimes");
      setError(error);
      setIsLoading(false);
    }
  }, [categorie]);

  return {
    isLoading,
    animes,
    error,
  };
};

export default useFetchAnimes;
