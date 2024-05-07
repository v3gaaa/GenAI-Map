import React from "react";
import Planet from "./Planet";

const Planet2Container = () => {
  const left = ["30", "67", "21", "60", "75", "25", "80", "50", "10"];
  const top = ["20", "25", "82", "70", "50", "47", "80", "15", "25"];
  const planets = Array.from({ length: left.length });
  const surface = [
    "p1.png",
    "p2.png",
    "p8.png",
    "p10.jpg",
    "terrazo.png",
    "p3.jpg",
    "p4.jpg",
    "p5.jpg",
    "p6.jpg",
    "p7.jpg",
  ];

  const getRandomWidth = () => {
    return `${1 + Math.random() * (3 - 1)}`;
  };

  return (
<<<<<<< HEAD
    <div className="absolute top-0 left-0 w-full h-full z-0">
      {/* <div
        className="absolute aspect-square"
        style={{ left: `${left[3]}%`, top: `${top[3]}%`, width: `1%` }}
      >
        <Planet surface={surface} />
      </div> */}
      {planets.map((_, index) => {
        const ranW = getRandomWidth();
        return (
          <>
=======
    <>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="absolute w-1/5 h-auto aspect-square bottom-3/4 flex items-center">
          <Planet surface={surface} />
          <div className="absolute h-full w-full inset-0 flex justify-center items-center flex-col">
>>>>>>> 689cb43b4a50f3bfea0e46b12272478619ee471a
            <div
              className="absolute aspect-square"
              style={{
                left: `${left[index]}%`,
                top: `${top[index]}%`,
                width: `${ranW}%`,
              }}
              key={index}
            >
              <Planet surface={surface[index]} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Planet2Container;
