import { LiquidMaterial } from "@/utils/ShaderMaterial";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { STLLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

extend({ LiquidMaterial });

export default function WaterModel({ name, ...props }) {
  const geometry = useLoader(STLLoader, `/models/${name}_inside.stl`);

  geometry.center();

  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const time = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouse.current.set(x, y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    time.current = state.clock.getElapsedTime();
    if (materialRef.current?.userData?.uniforms) {
      materialRef.current.userData.uniforms.u_time.value = time.current;
    }
  });

  useEffect(() => {
    if (!materialRef.current) return;

    const mat = materialRef.current;
    mat.onBeforeCompile = (shader) => {
      // 커스텀 uniform 추가
      shader.uniforms.u_cutHeight = { value: 0.18 };
      shader.uniforms.u_waveStrength = { value: 0.01 };
      shader.uniforms.u_waveFrequency = { value: 6.0 };
      shader.uniforms.u_time = { value: 0 };

      // userData에 저장 (useFrame에서 접근)
      mat.userData.uniforms = shader.uniforms;

      // 기존 fragment shader에서 `gl_FragColor` 설정 직전에 discard 삽입
      const token = `#include <output_fragment>`;
      const customCode = `
        float dist = distance(vViewPosition.xz, vec2(0.0));
        float wave = sin(dist * u_waveFrequency - u_time) * u_waveStrength;
        if (vViewPosition.y > u_cutHeight + wave) discard;
      `;
      shader.fragmentShader = shader.fragmentShader.replace(
        token,
        customCode + token
      );
    };

    // 재컴파일 강제
    mat.needsUpdate = true;
  }, []);

  return (
    <mesh
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      castShadow
      receiveShadow
      renderOrder={2}
      {...props}
    >
      <meshPhysicalMaterial
        ref={materialRef}
        color={0xcf7f1d}
        transmission={0}
        thickness={0.5}
        transparent
        opacity={0.3}
        ior={1.33}
        reflectivity={0.3}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}
