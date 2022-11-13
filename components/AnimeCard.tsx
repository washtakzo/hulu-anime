import React from "react";
import Image from "next/image";
import { FormatedAnime } from "../types";

type Props = {
  anime: FormatedAnime | null;
  isFetching: boolean;
  key: any;
};

const cutText = (text: string, size: number) => {
  if (!text) return "No description available";
  const shortText = text?.split("");
  shortText?.splice(size);

  return shortText?.join("") + (text?.length > size ? "..." : "");
};

const AnimeCard = ({ anime = null, isFetching = false }: Props) => {
  if (isFetching) {
    return (
      <div>
        <div className="h-[280px] sm:h-[360px] w-44 sm:w-52 m-auto bg-slate-800 opacity-40" />
        <h2 className="my-2 w-44 h-6 bg-slate-800 opacity-40"></h2>
      </div>
    );
  }

  return (
    <div>
      <div
        className=" relative h-[280px] sm:h-[360px] w-44 sm:w-52 object-fill m-auto hover:scale-105 transition duration-300 hover:cursor-pointer"
        onClick={() => {
          window.open(
            `https://www.youtube.com/results?search_query=${anime.title}+trailer`
          );
        }}
      >
        <p className="text-transparent text-center  z-10 text-sm sm:text-md lg:text-[1rem] sm:font-semibold hover:text-white hover:bg-[#0d1c2394]  py-2 absolute top-0 bottom-0 left-[-0px] right-[-0px]">
          {cutText(anime?.description, 300)}
        </p>
        <Image
          src={anime?.coverImage}
          alt={anime.title}
          fill={true}
          sizes="600px"
          className="object-cover"
        />
      </div>

      <h2 className="text-white text-lg py-2 font-semibold">{anime.title}</h2>
    </div>
  );
};

export default AnimeCard;
