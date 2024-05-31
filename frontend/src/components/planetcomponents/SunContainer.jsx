import React, { useState, useRef, useEffect } from "react";

import Planet from "./Planet";
import "./SunContainer.css";

const SunContainer = ({ surface }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);
  const [prompt, setPrompt] = useState("");

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
      <div
        className={`absolute w-2/3 h-max flex aspect-square cursor-pointer transition transform ${
          hovered || clicked ? "-translate-y-1 scale-105" : ""
        } items-center group rounded-full`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ top: "20%" }}
      >
        <div className="absolute -inset-0 top-2">
          <div className="w-full h-full opacity-70 blur-md bg-gradient-to-b from-orange-700 via-orange-300 to-amber-200 rounded-full" />
        </div>
        <Planet surface={surface} />
        <div className="absolute h-full inset-0 flex items-center justify-center flex-col">
          <div
            className={`text-white text-xs font-bold tracking-widest sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl bg-white bg-opacity-0 rounded-lg mb-2 ${
              hovered || clicked ? "bg-opacity-12" : "bg-opacity-0"
            }`}
            style={{
              filter: "drop-shadow(0px 2px 6px #ffffff)",
            }}
          >
            ASK AI
          </div>
          <textarea
            rows={3}
            ref={inputRef}
            className={`text-white bg-white w-5/6 h-1/4 p-1 bg-opacity-50 rounded-md placeholder-black sm:placeholder-sm lg:placeholder-lg transition${
              hovered || clicked
                ? "opacity-100 transition-opacity transition-transform duration-500"
                : "opacity-0"
            }`}
            style={{ fontSize: "0.7rem", opacity: hovered || clicked ? 1 : 0 }}
            onClick={() => handleClick(true)}
            name="prompt"
            value={prompt}
            onChange={handlePrompt}
            placeholder="Prompt your idea here..."
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                console.log(prompt);
                setPrompt("");
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SunContainer;
