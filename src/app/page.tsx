"use client";

import GlassModel from "@/components/GlassModel";
import IceModel from "@/components/IceModel";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { getRandomRotation } from "../utils/getRandomRotation";
// import { PhysicsProvider } from "@/utils/PhysicsProvider";
import { Physics } from "@react-three/cannon";

export default function Home() {
  const [glassName, setGlassName] = useState<string>("rock");
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 50 }}>
        <color attach="background" args={["#000"]} />

        <ambientLight intensity={0.2} />
        <directionalLight
          position={[5, 10, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.6}
        />

        <Environment preset="city" background={false} />

        <Physics gravity={[0, -0.2, 0]} iterations={30}>
          <Suspense fallback={null}>
            <GlassModel name={glassName} scale={1} />
            <IceModel
              type={"Cube2"}
              scale={2}
              initialRotation={getRandomRotation()}
            />
          </Suspense>
        </Physics>
      </Canvas>

      <Loader />
    </div>
  );
}
