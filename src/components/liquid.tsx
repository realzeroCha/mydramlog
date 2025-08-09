"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/Addons.js";

// 액체 모델링 컴포넌트
const LiquidMesh = ({
  geometry,
  liquidHeight,
}: {
  geometry: THREE.BufferGeometry;
  liquidHeight: number;
}) => {
  const { gl } = useThree();
  const liquidRef = useRef<THREE.Mesh>(null!);
  const clippingPlaneRef = useRef(
    new THREE.Plane(new THREE.Vector3(0, 1, 0), -liquidHeight)
  );

  useEffect(() => {
    gl.localClippingEnabled = true;
    return () => {
      gl.localClippingEnabled = false;
    };
  }, [gl]);

  // liquidHeight prop이 변경될 때마다 clipping plane 업데이트
  useEffect(() => {
    clippingPlaneRef.current.constant = -liquidHeight;
    if (liquidRef.current) {
      const liquidMaterial = liquidRef.current
        .material as THREE.MeshPhongMaterial;
      if (liquidMaterial) {
        liquidMaterial.clippingPlanes = [clippingPlaneRef.current];
      }
    }
  }, [liquidHeight]);

  // geometry의 법선을 뒤집어 내부 공간 모델링
  const liquidGeometry = geometry.clone();
  const normalAttribute = liquidGeometry.attributes
    .normal as THREE.BufferAttribute;
  if (normalAttribute) {
    for (let i = 0; i < normalAttribute.count; i++) {
      normalAttribute.setXYZ(
        i,
        -normalAttribute.getX(i),
        -normalAttribute.getY(i),
        -normalAttribute.getZ(i)
      );
    }
    normalAttribute.needsUpdate = true;
  }

  return (
    <>
      <mesh ref={liquidRef} geometry={liquidGeometry}>
        <meshPhongMaterial
          color={0x0077ff}
          transparent
          opacity={0.6}
          side={THREE.BackSide}
          clippingPlanes={[clippingPlaneRef.current]}
        />
      </mesh>
    </>
  );
};

// 유리잔 모델과 씬 전체를 관리하는 컴포넌트
const GlassSceneContent = ({ liquidHeight }: { liquidHeight: number }) => {
  const geometry = useLoader(STLLoader, "/models/glass1.stl");
  const glassRef = useRef<THREE.Mesh>(null!);

  if (!geometry) return null;

  geometry.scale(10, 10, 10);

  // 액체 상단 표면
  const liquidTopGeometry = new THREE.CircleGeometry(4.5, 32);
  liquidTopGeometry.rotateX(-Math.PI / 2);

  return (
    <>
      {/* 유리잔 Mesh */}
      <mesh ref={glassRef} geometry={geometry}>
        <meshPhongMaterial
          color={0xeeeeee}
          transparent
          opacity={0.2}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* 액체 모델링 컴포넌트 */}
      <LiquidMesh geometry={geometry} liquidHeight={liquidHeight} />

      {/* 액체 상단 표면 */}
      <mesh geometry={liquidTopGeometry} position-y={liquidHeight}>
        <meshPhongMaterial
          color={0x0077ff}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

// 메인 렌더링 컴포넌트
const GlassScene = ({ liquidHeight }: { liquidHeight: number }) => {
  const lightRef = useRef(null!);
  // useHelper(lightRef, THREE.DirectionalLightHelper, 5); // 개발용 Light Helper

  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 200], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        ref={lightRef}
        position={[5, 10, 7.5]}
        intensity={0.5}
      />
      <OrbitControls target={[0, 0, 0]} />
      <GlassSceneContent liquidHeight={liquidHeight} />
    </Canvas>
  );
};

export default GlassScene;
