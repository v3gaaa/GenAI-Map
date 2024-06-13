import PlanetContainer from "../planetcomponents/PlanetContainer";
import Categories from "../Categories/Categories";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Lista from "../ListAIs/Lista";
import ToggleBut from "../Categories/ToggleBut";
import { useLocation } from "react-router-dom";
import MenuBar from "../MenuBar";

const Category = () => {
  const location = useLocation();
  const { category: initialCategory } = location.state;
  const [AIs, setAIs] = useState([]);
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState(initialCategory);

  const [list, setList] = useState(true);
  console.log(category);
  const handleClick = () => {
    setList(!list);
    console.log(list);
  };

  const fetchAIs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/ais");
      const data = await response.json();
      setAIs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAIs();
  }, []);
  return (
    <>
      <MenuBar>
        <div className="flex flex-col h-lvh w-full items-center justify-around pb-0 relative">
          <ToggleBut setList={handleClick} />
          {list ? (
            <Lista
              AIs={AIs}
              category={category}
              setCategory={setCategory}
              loading={loading}
            />
          ) : (
            <Categories
              AIs={AIs}
              text="Launch"
              href="www.google.com"
              category={category}
              setCategory={setCategory}
            />
          )}
          {/* <div className="flex h-full w-full mb-0 items-center justify-center bg-white">
          <PlanetContainer surface={"p5.jpg"} />
        </div> */}
        </div>
      </MenuBar>
    </>
  );
};

export default Category;
