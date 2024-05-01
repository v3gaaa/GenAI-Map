import React from "react";
import Carousel from "./Carousel";
import Planet from "./Planet";
import PlanetContainer from "./PlanetContainer";
import Planet2Container from "./Planet2Container";

const MyCarousel = () => {
  const planets = [
    <Planet2Container surface="p5.jpg" category={"Images"} />,
    <Planet2Container surface="p1.png" category={"Text"} />,
    <Planet2Container surface="p2.png" category={"Audio"} />,
    <Planet2Container surface="p3.jpg" category={"category"} />,
    <Planet2Container surface="p4.jpg" category={"category"} />,
    <Planet2Container surface="terrazo.png" category={"category"} />,
  ];
  return (
    <>
      <Carousel planets={planets} />
    </>
  );
};

export default MyCarousel;
