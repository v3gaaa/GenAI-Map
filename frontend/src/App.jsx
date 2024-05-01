import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import MenuBar from "./components/MenuBar";
import MainContainer from "./components/MainContainer";

export default function App() {
  return (
    <>
      <Background />
      <MenuBar />
    </>
  );
}
