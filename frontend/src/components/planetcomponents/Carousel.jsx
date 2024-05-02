import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

const Carousel = ({ planets }) => {
  const numPlanets = planets.length;
  const aspectRatio = 0.5; // Desired aspect ratio (width/height)
  const [radiusX, setRadiusX] = useState(250); // Initial radius along the x-axis
  const [radiusY, setRadiusY] = useState(radiusX * aspectRatio); // Calculate radius along the y-axis based on aspect ratio
  const angleIncrement = (2 * Math.PI) / numPlanets;
  const containerRef = useRef(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setRadiusX(width * 0.4); // Adjust multiplier as needed
      setRadiusY(radiusX * aspectRatio);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Update rotation angle when scrolling
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = (event) => {
      // Increase or decrease angle based on scroll direction
      const deltaAngle = event.deltaY > 0 ? 0.1 : -0.1;
      setAngle((prevAngle) => prevAngle + deltaAngle);
    };

    container.addEventListener("wheel", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <animated.div
      ref={containerRef}
      style={{
        position: "relative",
        width: `${2 * radiusX}px`, // Set width based on the diameter along the x-axis
        height: `${2 * radiusY}px`,
      }}
    >
      {planets.map((planet, index) => {
        const currentAngle = index * angleIncrement + angle;
        const x = radiusX * Math.cos(currentAngle);
        const y = radiusY * Math.sin(currentAngle);

        // Calculate scale based on y-position
        const scaleFactor = ((y + radiusY) / (2 * radiusY)) * 1.3; // Scale from 0 to 1 based on y-position

        return (
          <div
            key={index}
            className="w-full h-auto aspect-video"
            style={{
              position: "absolute",
              transform: `translate3d(${x}px, ${y}px, 0)`,
              zIndex: numPlanets - index,
            }}
          >
            {planet}
          </div>
        );
      })}
    </animated.div>
  );
};

export default Carousel;
