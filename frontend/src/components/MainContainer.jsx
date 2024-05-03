import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./transition.css";

import Home from "./menucomponents/Home";
import Category from "./menucomponents/Category";
import LLM from "./menucomponents/LLM";
import Courses from "./menucomponents/Courses";

const MainContainer = ({ content }) => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <CSSTransition
          in={content === "home"}
          timeout={900}
          classNames="slide"
          unmountOnExit
        >
          <Home />
        </CSSTransition>
        <CSSTransition
          in={content === "category"}
          timeout={900}
          classNames="slide"
          unmountOnExit
        >
          <Category />
        </CSSTransition>
        <CSSTransition
          in={content === "llm"}
          timeout={900}
          classNames="slide"
          unmountOnExit
        >
          <LLM />
        </CSSTransition>
        <CSSTransition
          in={content === "courses"}
          timeout={900}
          classNames="slide"
          unmountOnExit
        >
          <Courses />
        </CSSTransition>
      </div>
    </>
  );
};

export default MainContainer;
