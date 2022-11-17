import React from "react";
import Image from "next/image";
import { FormatedAnime } from "../types";
import { truncat } from "../utils/helpers";

type Props = {
  anime: FormatedAnime | null;
  isFetching: boolean;
  key: any;
};

const YOUTUBE_SEARCH_BASE_URL = "https://www.youtube.com/results?search_query=";

const getAnimeTrailerYoutubeSearchURL = (animeTitle) =>
  YOUTUBE_SEARCH_BASE_URL + animeTitle + " teaser";

const MAX_DESCRIPTION_LENGTH = 300;
const MAX_TITLE_LENGTH = 40;
const NO_DESCRIPTION_AVAILABLE = "No description available";

const AnimeCard = ({ anime = null, isFetching = false }: Props) => {
  if (isFetching) {
    return (
      <div className="w-44 sm:w-52">
        <div className="h-[280px] sm:h-[360px] m-auto bg-slate-800 opacity-40" />
        <h2 className="my-2 w-[70%] h-6 bg-slate-800 opacity-40"></h2>
      </div>
    );
  }

  return (
    <div className="bg-red-900s mx-auto w-44 sm:w-52">
      <div
        className="relative h-[280px] sm:h-[360px]  m-auto hover:scale-105 transition duration-300 hover:cursor-pointer"
        onClick={() => {
          window.open(getAnimeTrailerYoutubeSearchURL(anime.title));
        }}
      >
        <p className="opacity-0 hover:opacity-100 text-center z-10 text-sm sm:text-md lg:text-[1rem] sm:font-semibold bg-[#0d1c2394]  py-2 absolute top-0 bottom-0 left-[-0px] right-[-0px]">
          {anime.description
            ? truncat(anime?.description, MAX_DESCRIPTION_LENGTH)
            : NO_DESCRIPTION_AVAILABLE}
        </p>
        <Image
          src={anime?.coverImage}
          alt={anime.title}
          sizes="100%"
          fill
          className="object-cover"
        />
      </div>

      <h2 className="text-lg py-2 font-semibold">
        {truncat(anime.title, MAX_TITLE_LENGTH)}
      </h2>
    </div>
  );
};

export default AnimeCard;
