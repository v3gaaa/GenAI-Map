import Planet from "./Planet";

const Planet2Container = ({ surface, category }) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="absolute w-1/5 h-auto aspect-square top-1/4">
          <Planet surface={surface} />
          <div className="absolute h-full w-full inset-0 flex justify-center items-center flex-col">
            <div
              className="absolute text-white text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl"
              style={{
                textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
              }}
            >
              {category}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planet2Container;
