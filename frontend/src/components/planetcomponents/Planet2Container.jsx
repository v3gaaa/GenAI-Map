import React from "react";

import { setUpdateRange } from "@react-three/drei/helpers/deprecated";

const Planet2Container = () => {
  const left = ["10", "87", "17", "60", "75", "25", "80", "50", "10"];
  const top = ["20", "15", "82", "70", "50", "47", "80", "15", "25"];

  const neonColors = [
    "linear-gradient(135deg, #ff00ff, #00ff00)", // Neon pink to neon green
    "linear-gradient(135deg, #00ff00, #00ffff)", // Neon green to neon cyan
    "linear-gradient(135deg, #00ffff, #ff0000)", // Neon cyan to neon red
    "linear-gradient(135deg, #ff0000, #ffff00)", // Neon red to neon yellow
    "linear-gradient(135deg, #ffff00, #ff69b4)", // Neon yellow to neon hot pink
    "linear-gradient(135deg, #ff69b4, #00ffbf)", // Neon hot pink to neon turquoise
    "linear-gradient(135deg, #00ffbf, #7fff00)", // Neon turquoise to neon chartreuse
    "linear-gradient(135deg, #7fff00, #ff00ff)", // Neon chartreuse to neon pink
  ];

  const getRandomWidth = () => {
    return `${1 + Math.random() * (3 - 1)}`;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      {neonColors.map((color, index) => {
        const ranW = getRandomWidth();
        return (
          <div
            key={index}
            className="absolute aspect-square rounded-full overflow-hidden"
            style={{
              left: `${left[index]}%`,
              top: `${top[index]}%`,
              width: `${ranW}%`,
              background: `${color}`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Planet2Container;
