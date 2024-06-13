import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PlanetContainer from "../planetcomponents/PlanetContainer";
import SunContainer from "../planetcomponents/SunContainer";
import Planet2Container from "../planetcomponents/Planet2Container";
import MenuBar from "../MenuBar";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    "Image",
    "Text",
    "Video",
    "Music & Sound",
    "Code Generator",
    "Data",
    "Game",
    "Vector",
  ];

  const surfaces = [
    "p1.jpg",
    "p5.jpg",
    "p3.jpg",
    "p4.jpg",
    "terrazo.png",
    "p2.jpg",
    "p6.jpg",
    "p7.jpg",
    "p8.jpg",
    "p10.png",
  ];
  return (
    <>
      <MenuBar>
        <div className="w-full h-full flex items-center justify-center">
          <svg
            viewBox="0 0 150 100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 h-full w-full stroke-gray-700 fill-none"
            strokeWidth="0.03"
          >
            <ellipse cx="50%" cy="33%" rx="20%" ry="15%" />
            <ellipse cx="50%" cy="34%" rx="25%" ry="22%" />
            <ellipse cx="50%" cy="34%" rx="30%" ry="28%" />
            <ellipse cx="50%" cy="36%" rx="35%" ry="34%" />
            <ellipse cx="50%" cy="40%" rx="40%" ry="40%" />
            <ellipse cx="50%" cy="44%" rx="45%" ry="45%" />
            <ellipse cx="50%" cy="46%" rx="50%" ry="48%" />
          </svg>

          <Planet2Container />

          <div className="absolute w-full h-full flex items-center justify-center relative flex-row">
            <div className="absolute w-full h-full"></div>
            <div
              id="left-container"
              className="h-full w-1/3 flex items-end justify-start relative flex-col text-center"
            >
              <div className="h-1/5 w-2/3 flex items-center justify-end text-white">
                <PlanetContainer
                  surface={surfaces[0]}
                  name={categories[0]}
                  shacolor={"#C13F23"}
                />
                {/* <div className="absolute w-1/3 bg-gray-400 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
              </div>
              <div className="h-1/5 w-2/3 flex items-start justify-start text-white mb-10">
                <PlanetContainer
                  surface={surfaces[1]}
                  name={categories[1]}
                  shacolor={"#5EA0F0"}
                />
                {/* <div className="absolute w-1/3 bg-gray-400 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
              </div>
              <div className="h-2/12"></div>
              <div className="h-1/5 w-2/3 flex items-start justify-start text-white">
                <PlanetContainer
                  surface={surfaces[2]}
                  name={categories[2]}
                  shacolor={"#224F86"}
                />
                {/* <div className="absolute w-1/3 bg-gray-400 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
              </div>
              <div className="h-1/5 w-2/3 flex items-start justify-end text-white">
                <PlanetContainer
                  surface={surfaces[3]}
                  name={categories[3]}
                  shacolor={"#83A2C9"}
                />
                {/* <div className="absolute w-1/3 bg-gray-400 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
              </div>
            </div>
            <div
              id="sun-container"
              className="h-full w-1/3 flex items-center justify-center relative"
            >
              <SunContainer surface={"sun.jpg"} />
              {/* <div className="absolute top-1/3 w-full h-max flex transition transform items-center justify-center text-white">
            Sun
          </div> */}
            </div>
            <div
              id="right-container"
              className="h-full w-1/3 flex items-start justify-start relative flex-col text-center"
            >
              <div className="h-1/5 w-2/3 flex items-center justify-start text-white">
                <PlanetContainer
                  surface={surfaces[4]}
                  name={categories[4]}
                  shacolor={"#5E225E"}
                />
                {/* <div className="absolute w-1/3 bg-gray-400 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
              </div>
              <div className="h-1/5 w-2/3 flex items-start justify-end text-white mb-10">
                <PlanetContainer
                  surface={surfaces[5]}
                  name={categories[5]}
                  shacolor={"#3BEDE8"}
                />
                {/* <div className="absolute w-1/3 bg-gray-400 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
              </div>
              <div className="h-2/12"></div>
              <div className="h-1/5 w-2/3 flex items-start justify-end text-white">
                <PlanetContainer
                  surface={surfaces[6]}
                  name={categories[6]}
                  shacolor={"#CE6C34"}
                />
                {/* <div className="absolute w-1/3 bg-gray-400 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
              </div>
              <div className="h-1/5 w-2/3 flex items-start justify-start text-white">
                <PlanetContainer
                  surface={surfaces[7]}
                  name={categories[7]}
                  shacolor={"#E5E5BB"}
                />
                {/* <div className="absolute w-1/3 bg-gray-400 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </MenuBar>
    </>
  );
};

export default Home;
