import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFetchAnimes = () => {
  const categorie = useSelector((state: any) => state.main.categorie); //source d'erreur
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function get() {
      setError(null);
      setIsLoading(true);
      await categorie()
        .then((response) => setAnimes(response))
        .catch((error) => setError(error));
      setIsLoading(false);
    }
    get();
  }, [categorie]);

  return {
    isLoading,
    animes,
    error,
  };
};

export default useFetchAnimes;
