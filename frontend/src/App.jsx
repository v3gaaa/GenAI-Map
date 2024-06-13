import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import MenuBar from "./components/MenuBar";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Login from "./components/login";
import Register from "./components/register/Register";
import AIShown from "./components/ListAIs/AIShown";
import Home from "./components/menucomponents/Home";
import Category from "./components/menucomponents/Category";
import LLM from "./components/menucomponents/LLM";

export default function App() {
  return (
    <>
      <Background />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/ai" element={<AIShown />}></Route>
        <Route path="/llm" element={<LLM />}></Route>
      </Routes>
    </>
  );
}
