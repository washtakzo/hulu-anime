import axios from "axios";
import { Animes, FormatedAnimes } from "./types";

const makeQuery = (variables: string, mediaFilters: string) => {
  return `
  query ($page: Int, $perPage: Int, ${variables}) {
    Page(page: $page, perPage: $perPage) {
        media(isAdult: false, isLicensed:true, ${mediaFilters}) {
            id
            title {
                english
                native
                }
            type
            genres
            coverImage{
                extraLarge
              }
              bannerImage
              trailer{
                id
                site
                }
            description
            popularity
            trending
        }
    }
}
`;
};

const formatAnimes = (anime) => {
  return {
    bannerImage: anime.bannerImage,
    coverImage: anime.coverImage.extraLarge,
    description: anime.description,
    genres: anime.genres,
    id: anime.id,
    popularity: anime.popularity,
    title: anime.title.english || anime.title.native,
    trailer: anime.trailer,
    trending: anime.trending,
    type: anime.type,
  };
};

const seasonQuery = makeQuery(
  "$seasonYear: Int",
  "seasonYear: $seasonYear, type: ANIME, sort: TRENDING_DESC"
);

const trendingQuery = makeQuery("", "type: ANIME, sort: TRENDING_DESC");

const popularQuery = makeQuery("", "type: ANIME, sort: POPULARITY_DESC");

const searchQuery = makeQuery(
  "$search: String",
  "search: $search ,type: ANIME, sort: TRENDING_DESC"
);

async function getAnime(query, variables): Promise<Animes> {
  const url = "https://graphql.anilist.co";

  const data = await axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      query: query,
      variables: variables,
    },
  });
  return data.data.data.Page.media;
}

const getTrendingAnime = async (
  payload: { nbResult: number } = { nbResult: 42 }
) => {
  const variables = {
    page: 1,
    perPage: payload.nbResult,
  };
  const animes: Animes = await getAnime(trendingQuery, variables);
  const formatedAnimes: FormatedAnimes = animes?.map((anime) => {
    return {
      bannerImage: anime.bannerImage,
      coverImage: anime.coverImage.extraLarge,
      description: anime.description,
      genres: anime.genres,
      id: anime.id,
      popularity: anime.popularity,
      title: anime.title.english || anime.title.native,
      trailer: anime.trailer,
      trending: anime.trending,
      type: anime.type,
    };
  });
  return formatedAnimes;
};

const getPopularAnime = async (
  payload: { nbResult: number } = { nbResult: 42 }
) => {
  const variables = {
    page: 1,
    perPage: payload.nbResult,
  };
  const animes: Animes = await getAnime(popularQuery, variables);
  const formatedAnimes: FormatedAnimes = animes.map(formatAnimes);
  return formatedAnimes;
};

const getSeasonAnime = async (payload: { year: Number; nbResult: number }) => {
  const variables = {
    seasonYear: payload.year,
    page: 1,
    perPage: 42,
  };

  const animes: Animes = await getAnime(seasonQuery, variables);
  const formatedAnimes: FormatedAnimes = animes.map(formatAnimes);
  return formatedAnimes;
};

const getSearchedAnime = async (payload: {
  animeName: String;
  nbResult: number;
}) => {
  const variables = {
    search: payload.animeName,
    page: 1,
    perPage: payload.nbResult || 43,
  };

  const animes: Animes = await getAnime(searchQuery, variables);
  const formatedAnimes: FormatedAnimes = animes.map(formatAnimes);
  return formatedAnimes;
};

const getAnimeQuery = {
  getPopularAnime,
  getSearchedAnime,
  getSeasonAnime,
  getTrendingAnime,
};

export default getAnimeQuery;
