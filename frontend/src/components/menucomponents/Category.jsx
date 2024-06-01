import PlanetContainer from "../planetcomponents/PlanetContainer";
import Categories from "../Categories/Categories";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Lista from "../ListAIs/Lista";

const Category = () => {
  const [list, setList] = useState(false);

  const handleClick = () => {
    setList(!list);
    console.log(list);
  };
  return (
    <>
      <div className="flex flex-col h-lvh w-full items-center justify-around pb-0 relative">
        <div
          className="rounded-full border-white border-2 hover:bg-white hover:bg-opacity-50 text-white text-sm w-20 h-8 z-10 flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          {list ? "Lista" : "Carrusel"}
        </div>
        {list ? (
          <Lista />
        ) : (
          <Categories
            text="Launch"
            href="www.google.com"
            Category={"sun.jpg"}
          />
        )}
        {/* <div className="flex h-full w-full mb-0 items-center justify-center bg-white">
          <PlanetContainer surface={"p5.jpg"} />
        </div> */}
      </div>
    </>
  );
};

export default Category;
