import axios from "axios";
import { Animes, FormatedAnimes } from "./types";

const popularQuery = `
query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
        media(type: ANIME, sort: POPULARITY_DESC) {
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
const seasonQuery = `
query ($page: Int, $perPage: Int, $seasonYear: Int) {
    Page(page: $page, perPage: $perPage) {
        media(seasonYear: $seasonYear, type: ANIME, sort: POPULARITY_DESC) {
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
const searchQuery = `
query ($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
        media(search: $search, type: ANIME, sort: POPULARITY_DESC) {
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

const getPopularAnime = async (nbResult: number = 10) => {
  const variables = {
    page: 1,
    perPage: nbResult,
  };
  const animes: Animes = await getAnime(popularQuery, variables);
  const formatedAnimes: FormatedAnimes = animes.map((anime) => {
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
const getSeasonAnime = async (seasonYear: Number, nbResult: number = 10) => {
  const variables = {
    seasonYear: seasonYear,
    page: 1,
    perPage: nbResult,
  };

  const animes: Animes = await getAnime(seasonQuery, variables);
  const formatedAnimes: FormatedAnimes = animes.map((anime) => {
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
const getSearchedAnime = async (animeName: String, nbResult: number = 10) => {
  const variables = {
    search: animeName,
    page: 1,
    perPage: nbResult,
  };

  const animes: Animes = await getAnime(searchQuery, variables);
  const formatedAnimes: FormatedAnimes = animes.map((anime) => {
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

const getAnimeQuery = { getPopularAnime, getSearchedAnime, getSeasonAnime };

export default getAnimeQuery;
