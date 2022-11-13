import React from "react";

const Footer = () => {
  const handleClick = () => {
    window.open("https://zoherouazzar.webflow.io/");
  };
  return (
    <footer>
      <h4
        className="text-lg p-8  text-center cursor-pointer hover:scale-105 transition duration-300 ease-out w-64 m-auto"
        onClick={handleClick}
      >
        Développé par Zoher
      </h4>
    </footer>
  );
};

export default Footer;
