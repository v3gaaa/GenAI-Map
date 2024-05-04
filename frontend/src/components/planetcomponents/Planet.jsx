import {
  Canvas,
  extend,
  useLoader,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { Effects, useTexture } from "@react-three/drei";
import { LUTPass, LUTCubeLoader } from "three-stdlib";
import { Bloom } from "@react-three/postprocessing";
import React, { useRef, useState, useEffect } from "react";
import { Html } from "@react-three/drei";

extend({ LUTPass });

function Grading() {
  const { texture3D } = useLoader(LUTCubeLoader, "/img/cubicle-99.CUBE");
  return (
    <Effects>
      <lUTPass lut={texture3D} intensity={0.75} />
    </Effects>
  );
}

function Sphere({ scale, surface }) {
  const meshRef = useRef();
  const texture = useTexture(`/img/${surface}`);

  //   if (meshRef.current) {
  //     meshRef.current.rotation.x = Math.PI / 5; // Initial rotation around x-axis
  //   }

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Update y-axis rotation relative to z-axis rotation
      meshRef.current.rotation.y += 0.13 * delta; // Adjust rotation speed as needed

      // Update z-axis rotation (tilted rotation)
      meshRef.current.rotation.z += 0.005 * delta; // Adjust tilt rotation speed as needed
    }
  });

  return (
    <mesh scale={[scale, scale, scale]} ref={meshRef}>
      <sphereGeometry args={[2, 64, 32]} />
      <meshPhysicalMaterial
        map={texture}
        clearcoat={2}
        clearcoatRoughness={2}
        roughness={1}
        metalness={0.5}
      />
    </mesh>
  );
}

const Planet = ({ surface }) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      const minDimension = Math.min(width, height);
      setScale(minDimension / 10); // Adjust divisor to control size
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <>
      <Canvas
        frameloop="always"
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "none", borderRadius: "100%" }}
      >
        <ambientLight intensity={7} />

        <Sphere scale={scale} surface={surface} />
        <Grading />
      </Canvas>
    </>
  );
};

export default Planet;
