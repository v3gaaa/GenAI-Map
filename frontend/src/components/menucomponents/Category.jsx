import PlanetContainer from "../planetcomponents/PlanetContainer";

const Category = () => {
  return (
    <>
      <div className="flex flex-col h-lvh w-full items-center justify-around pb-0">
        <img src="p4.jpg" alt="" className="h-full" />

        <div className="flex h-lvh w-full mb-0 items-center justify-center">
          <PlanetContainer surface={"p5.jpg"} />
        </div>
      </div>
    </>
  );
};

export default Category;
