import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import MenuBar from "./components/MenuBar";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Login from "./components/login";
import Register from "./components/register/Register";

export default function App() {
  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<MenuBar />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}
