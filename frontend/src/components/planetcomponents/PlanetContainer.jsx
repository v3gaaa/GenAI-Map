import React, { useState, useRef, useEffect } from "react";

import Planet from "./Planet";

const PlanetContainer = ({ surface, name, shacolor }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  console.log(shacolor);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = (a) => {
    setClicked(a);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
<<<<<<< HEAD
      <div
        className={`absolute w-2/6 h-auto flex aspect-square cursor-pointer transition transform ${
          hovered || clicked ? "-translate-y-1 scale-105" : ""
        } items-center group rounded-full shadow-lg`}
        style={{ boxShadow: `0px 2px 10px 0px ${shacolor}BF` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Planet surface={surface} />
        <div className="absolute h-full inset-0 flex items-center justify-center flex-col">
          <div
            className={`text-white text-md font-bold sm:text-md md:text-cl lg:text-2xl xl:text-3xl bg-white bg-opacity-0 rounded-lg mb-2${
              hovered || clicked ? "bg-opacity-12" : "bg-opacity-0"
            }`}
            style={{
              textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
              filter: "drop-shadow(0px 2px 6px #ffffff)",
            }}
          >
            {name}
=======
      <div className="absolute top-1/4 left-0 w-full h-max flex justify-center items-center">
        <div className="w-1/5 h-auto aspect-square top-1/4 transition transform hover:-translate-y-1 hover:scale-105">
          <Planet surface={surface} />
          <div className="absolute h-max inset-0 flex justify-center items-center flex-col top-1/4">
            <div
              className="text-white text-xs sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl"
              style={{
                textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
              }}
            >
              Ask AI
            </div>
>>>>>>> 689cb43b4a50f3bfea0e46b12272478619ee471a
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetContainer;
