import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { mainActions } from "../store/mainSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="bg-[#0D1C23] text-white font-semibold flex justify-center gap-8 md:gap-16 xl:text-xl px-10 py-8 ">
      <h3
        className="cursor-pointer hover:scale-110 transition duration-300 ease-out"
        onClick={() => dispatch(mainActions.getTrending())}
      >
        Trending
      </h3>
      <h3
        className="cursor-pointer hover:scale-110 transition duration-300 ease-out"
        onClick={() => dispatch(mainActions.getPopular())}
      >
        Popular
      </h3>
      <h3
        className="cursor-pointer hover:scale-110 transition duration-300 ease-out"
        onClick={() => dispatch(mainActions.getSeason({ year: 2022 }))}
      >
        Current Season
      </h3>
      <h3
        className="cursor-pointer hover:scale-110 transition duration-300 ease-out"
        onClick={() => dispatch(mainActions.getSeason({ year: 2021 }))}
      >
        Last Season
      </h3>
      <h3
        className="cursor-pointer hover:scale-110 transition duration-300 ease-out"
        onClick={() => dispatch(mainActions.getSeason({ year: 2023 }))}
      >
        Next Season
      </h3>
    </header>
  );
};

export default Header;
