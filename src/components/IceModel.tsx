import { useSTLPhysics } from "@/hooks/useSTLPhysics";
import { useEffect } from "react";
import * as THREE from "three";

export default function IceModel({ type, initialRotation, scale }) {
  const [ref, api, geometry] = useSTLPhysics({
    path: `/models/Ice${type}.stl`,
    mass: 1,
    type: "convex",
    scale,
  });

  useEffect(() => {
    if (api) {
      // 물리 바디의 초기 위치 설정
      api.position.set(0, 5, 0);

      // 초기 회전 설정
      if (initialRotation) {
        const euler = new THREE.Euler(...initialRotation);
        const quaternion = new THREE.Quaternion().setFromEuler(euler);
        api.quaternion.copy(quaternion);
      }
    }
  }, [api, initialRotation]);

  if (!geometry) {
    return null;
  }

  return (
    <mesh
      ref={ref}
      geometry={geometry}
      position={[0, 0, 0]}
      castShadow
      receiveShadow
      renderOrder={3}
      scale={scale}
    >
      <meshPhysicalMaterial
        color={0xdbefff}
        roughness={0}
        transmission={0.5}
        thickness={0}
        transparent
        ior={1.31}
        opacity={1}
        reflectivity={1}
        attenuationColor={0x88ccff}
        attenuationDistance={1.5}
        clearcoat={1}
        clearcoatRoughness={0.05}
        envMapIntensity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
