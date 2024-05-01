import Planet from "./Planet";

const PlanetContainer = ({ surface }) => {
  return (
    <>
      <div className="absolute top-1/4 left-0 w-full h-max flex justify-center items-center">
        <div className="w-1/3 h-auto aspect-square top-1/4 transition transform hover:-translate-y-1 hover:scale-105">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetContainer;
