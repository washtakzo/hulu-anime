import React from "react";
import Image from "next/image";
import { FormatedAnime } from "../types";
import { truncat } from "../utils/helpers";

type Props = {
  anime: FormatedAnime | null;
  isFetching: boolean;
  key: any;
};

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
        className="relative h-[280px] sm:h-[360px] object-fill m-auto hover:scale-105 transition duration-300 hover:cursor-pointer"
        onClick={() => {
          window.open(
            `https://www.youtube.com/results?search_query=${anime.title} trailer`
          );
        }}
      >
        <p className="opacity-0 hover:opacity-100 text-center z-10 text-sm sm:text-md lg:text-[1rem] sm:font-semibold bg-[#0d1c2394]  py-2 absolute top-0 bottom-0 left-[-0px] right-[-0px]">
          {truncat(anime?.description, 300)}
        </p>
        <Image
          src={anime?.coverImage}
          alt={anime.title}
          fill={true}
          className="object-cover"
        />
      </div>

      <h2 className="text-lg py-2 font-semibold">{truncat(anime.title, 40)}</h2>
    </div>
  );
};

export default AnimeCard;
