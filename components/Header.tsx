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

  return (
    <header className="bg-[#0D1C23] text-white font-semibold flex flex-wrap justify-center gap-8 md:gap-16 xl:text-xl px-10 py-8">
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
    </header>
  );
};

export default Header;
