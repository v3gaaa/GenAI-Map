import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./../components/transition.css";

import Home from "./menucomponents/Home";
import Category from "./menucomponents/Category";
import LLM from "./menucomponents/LLM";
import Courses from "./menucomponents/Courses";
import Lista from "./ListAIs/Lista";

const MainContainer = ({ content, setContent }) => {
  const [cate, setCate] = useState("Text");
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        {content == "home" ? (
          <Home setContent={setContent} setCate={setCate} />
        ) : content == "category" ? (
          <Category cate={cate} setContent={setContent}/>
        ) : content === "llm" ? (
          <LLM />
        ) : content === "courses" ? (
          <Courses />
        ) : (
          <Home />
        )}

        {/* <CSSTransition
          in={content === "home"}
          timeout={900}
          classNames="slide"
          unmountOnExit
          key={"home"}
        >
          <Home />
        </CSSTransition>
        <CSSTransition
          in={content === "category"}
          timeout={900}
          classNames="slide"
          unmountOnExit
          key={"category"}
        >
          <Category />
        </CSSTransition>
        <CSSTransition
          in={content === "llm"}
          timeout={900}
          classNames="slide"
          unmountOnExit
          key={"llm"}
        >
          <LLM />
        </CSSTransition>
        <CSSTransition
          in={content === "courses"}
          timeout={900}
          classNames="slide"
          unmountOnExit
          key={"courses"}
        >
          <Courses />
        </CSSTransition> */}
      </div>
    </>
  );
};

export default MainContainer;
