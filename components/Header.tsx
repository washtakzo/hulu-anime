import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { mainActions } from "../store/mainSlice";

const TRENDING_CLASS = "trending_class";
const POPULAR_CLASS = "popular_class";
const CURRENT_SEASON_CLASS = "current_season_class";
const LAST_SEASON_CLASS = "last_season_class";
const NEXT_SEASON_CLASS = "next_season_class";

const Header = () => {
  const dispatch = useDispatch();
  const [activeClass, setActiveClass] = useState(TRENDING_CLASS);
  const titleClass = `text-center cursor-pointer hover:scale-110 transition duration-300 ease-out`;
  const titleClassActiveColor = "text-green-400";
  const animeInputRef: any = React.useRef();
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(
      mainActions.getSearch({
        animeName: animeInputRef.current.value || "dragon ball",
      })
    );
    setActiveClass(null);
  };

  return (
    <header>
      <h1 className="py-8 text-3xl md:text-4xl font-bold text-center">
        Hulu-Anime
      </h1>
      <div className=" font-semibold flex flex-wrap justify-center gap-8 md:gap-16 xl:text-xl px-10 py-4">
        <h3
          className={`${titleClass} ${
            activeClass === TRENDING_CLASS && titleClassActiveColor
          }`}
          onClick={() => {
            dispatch(mainActions.getTrending());
            setActiveClass(TRENDING_CLASS);
          }}
        >
          Trending
        </h3>
        <h3
          className={`${titleClass} ${
            activeClass === POPULAR_CLASS && titleClassActiveColor
          }`}
          onClick={() => {
            dispatch(mainActions.getPopular());
            setActiveClass(POPULAR_CLASS);
          }}
        >
          Popular
        </h3>
        <h3
          className={`${titleClass} ${
            activeClass === CURRENT_SEASON_CLASS && titleClassActiveColor
          }`}
          onClick={() => {
            dispatch(mainActions.getSeason({ year: 2022 }));
            setActiveClass(CURRENT_SEASON_CLASS);
          }}
        >
          Current Season
        </h3>
        <h3
          className={`${titleClass} ${
            activeClass === LAST_SEASON_CLASS && titleClassActiveColor
          }`}
          onClick={() => {
            dispatch(mainActions.getSeason({ year: 2021 }));
            setActiveClass(LAST_SEASON_CLASS);
          }}
        >
          Last Season
        </h3>
        <h3
          className={`${titleClass} ${
            activeClass === NEXT_SEASON_CLASS && titleClassActiveColor
          }`}
          onClick={() => {
            dispatch(mainActions.getSeason({ year: 2023 }));
            setActiveClass(NEXT_SEASON_CLASS);
          }}
        >
          Next Season
        </h3>
      </div>
      <div className="flex justify-center py-2">
        <form
          className="border border-green-300 p-1 rounded-xl"
          onSubmit={handleSubmitSearch}
        >
          <input
            type="text"
            placeholder="Search anime ..."
            className="bg-transparent outline-none mx-2 w-36 md:w-52 xl:w-72 placeholder:text-white"
            ref={animeInputRef}
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 inline-flex cursor-pointer hover:scale-110 hover:text-green-300 transition duration-300 ease-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
