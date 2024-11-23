// components/Globe.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { Mesh } from "three";
import { useRef } from "react";

export const Globe = () => {
  const globeRef = useRef<Mesh>(null);
  const [earthTexture] = useTexture(["/assets/earthmap.jpg"]);

  // Rotate the globe
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Canvas style={{ height: "100vh", background: "#000" }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* Stars */}
      <Stars radius={100} depth={50} count={5000} factor={7} fade />
      {/* Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      {/* Controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};