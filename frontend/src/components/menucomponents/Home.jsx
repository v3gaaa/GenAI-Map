import PlanetContainer from "../planetcomponents/PlanetContainer";
import SunContainer from "../planetcomponents/SunContainer";
import Planet2Container from "../planetcomponents/Planet2Container";

const Home = () => {
  return (
    <>
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
          className="h-full w-1/3 flex items-end justify-center relative flex-col"
        >
          <div className="h-1/2 w-2/3 flex items-center justify-center text-white">
            <PlanetContainer
              surface={"p7.jpg"}
              name={"Images"}
              shacolor={"#9a326e"}
            />
            {/* <div className="absolute w-1/2 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
          </div>
          <div className="h-1/2 w-2/3 flex items-start justify-end text-white">
            <PlanetContainer
              surface={"p8.png"}
              name={"Music"}
              shacolor={"#b97a94"}
            />
            {/* <div className="absolute w-1/2 h-auto aspect-square flex items-center justify-center">
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
          className="h-full w-1/3 flex items-start justify-center relative flex-col"
        >
          <div className="h-1/2 w-2/3 flex items-center justify-center text-white">
            <PlanetContainer
              surface={"p3.jpg"}
              name={"Data"}
              shacolor={"#b8c9a8"}
            />
            {/* <div className="absolute w-1/2 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
          </div>
          <div className="h-1/2 w-2/3 flex items-start justify-start text-white">
            <PlanetContainer
              surface={"p10.jpg"}
              name={"Text"}
              shacolor={"#3a9ded"}
            />
            {/* <div className="absolute w-1/2 h-auto aspect-square flex items-center justify-center">
              Planet
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
