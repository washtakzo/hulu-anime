export type Anime = {
  coverImage: {
    extraLarge: string;
  };
  bannerImage: string;
  description: string;
  genres: string[];
  id: number;
  popularity: number;
  title: {
    english: string;
    native: string;
  };
  trailer: {
    id: string;
    site: string;
  };
  trending: number;
  type: string;
};

export type Animes = Anime[];

export type FormatedAnime = {
  coverImage: string;
  bannerImage: string;
  description: string;
  genres: string[];
  id: number;
  popularity: number;
  title: string;
  trailer: {
    id: string;
    site: string;
  };
  trending: number;
  type: string;
};

export type FormatedAnimes = FormatedAnime[];
