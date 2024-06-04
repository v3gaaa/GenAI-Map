import React, { useState, useRef, useEffect } from "react";

import Planet from "./Planet";

const PlanetContainer = ({ surface, name, shacolor, setContent, setCate }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setCate(name);
    setContent("category");
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`absolute w-1/3 h-auto flex aspect-square cursor-pointer transition transform ${
          hovered || clicked ? "-translate-y-1 scale-105 " : ""
        } items-center group rounded-full shadow-lg`}
        style={{ boxShadow: `0px 2px 10px 0px ${shacolor}BF` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick()}
      >
        <Planet surface={surface} />
        <div className="absolute h-full inset-0 flex items-center justify-center flex-col ">
          <div
            className={`text-white text-md font-bold sm:text-md md:text-cl lg:text-2xl xl:text-3xl bg-white bg-opacity-0 rounded-lg mb-2`}
            style={{
              textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
              filter: "drop-shadow(0px 2px 6px #ffffff)",
            }}
          >
            {name}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetContainer;
