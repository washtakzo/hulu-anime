import React from "react";

const Footer = () => {
  const handleClick = () => {
    window.open("https://zoherouazzar.webflow.io/");
  };
  return (
    <footer>
      <h4
        className={`mt-auto text-lg text-center cursor-pointer 
        hover:scale-105 transition duration-300 ease-out w-64 mx-auto my-8`}
        onClick={handleClick}
      >
        Développé par Zoher
      </h4>
    </footer>
  );
};

export default Footer;
