import { useSTLPhysics } from "@/hooks/useSTLPhysics";
import { useEffect } from "react";
import * as THREE from "three";

export default function GlassModel({ name, scale }) {
  const [ref, api, geometry] = useSTLPhysics({
    path: `/models/${name}.stl`,
    mass: 0,
    type: "trimesh",
    scale,
  });

  useEffect(() => {
    if (api) {
      api.position.set(0, 0, 0);
      api.rotation.set(-Math.PI / 2, 0, 0);
    }
  }, [api]);

  console.log("geometry", geometry);

  if (!geometry) {
    return null;
  }

  return (
    <mesh
      ref={ref}
      geometry={geometry}
      // rotation={[-Math.PI / 2, 0, 0]}
      castShadow
      receiveShadow
      renderOrder={1}
      scale={scale}
    >
      <meshPhysicalMaterial
        color={0xffffff}
        metalness={0}
        roughness={1}
        transmission={1}
        thickness={0}
        transparent
        ior={1.5}
        reflectivity={0.8}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}
