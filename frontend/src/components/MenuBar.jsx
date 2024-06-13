import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuBar.css";
import MainContainer from "./MainContainer";
import { arrayBuffer } from "three/examples/jsm/nodes/Nodes.js";

const MenuBar = ({ children }) => {
  const navigate = useNavigate();

  const handleNavigate = (value) => {
    if (value == "category") {
      navigate("/category", { state: { category: "Image" } });
    } else {
      navigate(`/${value}`);
    }
  };
  const styleButton =
    "w-1/6 h-1/2 flex items-center justify-center transition transform hover:-translate-y-1 hover:scale-110 mt-2 cursor-pointer md:text-xs lg:text-sm xl:text-base";
  return (
    <>
      <div
        className="w-full flex flex-row justify-around items-center text-xs font-light text-white place-items-stretch px-15 cursor-pointer"
        style={{ height: "8%" }}
        id="menuBar"
      >
        <div
          className={styleButton}
          onClick={() => {
            handleNavigate("home");
          }}
        >
          Home
        </div>
        <div
          className={styleButton}
          onClick={() => {
            handleNavigate("category");
          }}
        >
          Categorias
        </div>
        <div className="w-1/6 h-1/2 flex items-center justify-center text-center text-lg font-normal transition transform hover:-translate-y-1 hover:scale-110 cursor-pointer md:text-lg lg:text-xl xl:text-2xl">
          AI Universe
        </div>
        <div
          className={styleButton}
          onClick={() => {
            handleNavigate("llm");
          }}
        >
          LLM
        </div>
        <div
          className={styleButton}
          onClick={() => {
            handleNavigate("courses");
          }}
        >
          Cursos
        </div>
      </div>
      {children}
    </>
  );
};

export default MenuBar;
