import PlanetContainer from "../planetcomponents/PlanetContainer";

const Category = () => {
  return (
    <>
      <div className="flex flex-col h-lvh w-full items-center justify-around pb-0">
        <div className="flex h-full w-full mb-0 items-center justify-center bg-white">
          <PlanetContainer surface={"p5.jpg"} />
        </div>
      </div>
    </>
  );
};

export default Category;
