import React from "react";

const Header = () => {
  return (
    <header className="bg-[#0D1C23] text-white font-semibold flex justify-center gap-8 md:gap-16 xl:text-xl px-10 py-8 ">
      <h3 className="cursor-pointer hover:scale-110 transition duration-300 ease-out">
        Trending
      </h3>
      <h3 className="cursor-pointer hover:scale-110 transition duration-300 ease-out">
        Current Season
      </h3>
      <h3 className="cursor-pointer hover:scale-110 transition duration-300 ease-out">
        Last Season
      </h3>
    </header>
  );
};

export default Header;
