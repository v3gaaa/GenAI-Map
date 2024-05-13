import PlanetContainer from "../planetcomponents/PlanetContainer";
import Categories from "../Categories/Categories";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Category = () => {
  return (
    <>
      <div className="flex flex-col h-lvh w-full items-center justify-around pb-0">
        <Categories text="Launch" href="www.google.com" Category={"sun.jpg"} />

        {/* <div className="flex h-full w-full mb-0 items-center justify-center bg-white">
          <PlanetContainer surface={"p5.jpg"} />
        </div> */}
      </div>
    </>
  );
};

export default Category;
