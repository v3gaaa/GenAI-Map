import PlanetContainer from "../planetcomponents/PlanetContainer";
import Categories from "../Categories/Categories";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Category = () => {
  return (
    <>
      <div className="flex flex-col h-lvh w-full items-center justify-around pb-0">
        <Categories text="Launch" href="www.google.com" Category={"sun.jpg"}/>
      </div>
    </>
  );
};

export default Category;
