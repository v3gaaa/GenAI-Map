import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

const Star = ({ position }) => {
  const ref = useRef();

  // Update star position
  useFrame(() => {
    if (ref.current) {
      ref.current.position.z += 0.1;
      if (ref.current.position.z > 1000) {
        ref.current.position.z = -1000;
      }
    }
  });

  return (
    <Sphere args={[0.5, 32, 32]} position={position} ref={ref}>
      <meshBasicMaterial attach="material" color="white" />
    </Sphere>
  );
};

const Background = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {[...Array(1000)].map((_, index) => (
        <Star
          key={index}
          position={[
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000,
            Math.random() * -2000, // Ensure stars are initially in front of camera
          ]}
        />
      ))}
    </Canvas>
  );
};

export default Background;
