import PlanetContainer from "../planetcomponents/PlanetContainer";
import Categories from "../Categories/Categories";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Lista from "../ListAIs/Lista";
import ToggleBut from "../Categories/ToggleBut";

const Category = ({ cate, setContent }) => {
  const [list, setList] = useState(true);
  console.log(cate);
  const handleClick = () => {
    setList(!list);
    console.log(list);
  };
  return (
    <>
      <div className="flex flex-col h-lvh w-full items-center justify-around pb-0 relative">
        <ToggleBut setList={handleClick} />
        {list ? (
          <Lista category={cate} setContent={setContent}/>
        ) : (
          <Categories text="Launch" href="www.google.com" Category={cate} />
        )}
        {/* <div className="flex h-full w-full mb-0 items-center justify-center bg-white">
          <PlanetContainer surface={"p5.jpg"} />
        </div> */}
      </div>
    </>
  );
};

export default Category;
