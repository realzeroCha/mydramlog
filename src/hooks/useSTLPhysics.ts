import { useConvexPolyhedron, useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";

import { useRef } from "react";
import * as THREE from "three";
import { ConvexHull, STLLoader } from "three/examples/jsm/Addons.js";

// ConvexPolyhedron 생성을 위한 헬퍼 함수
function createConvexPolyhedronArgs(
  geometry: THREE.BufferGeometry
): [number[][], number[][]] {
  const mesh = new THREE.Mesh(geometry);
  const convexHull = new ConvexHull().setFromObject(mesh);

  const vertices: number[][] = [];
  const faces: number[][] = [];

  convexHull.vertices.forEach((v) => {
    vertices.push([v.point.x, v.point.y, v.point.z]);
  });

  const vertexMap = new Map<string, number>();
  vertices.forEach((v, i) => {
    vertexMap.set(`${v[0]},${v[1]},${v[2]}`, i);
  });

  convexHull.faces.forEach((face) => {
    const faceIndices: number[] = [];
    let edge = face.edge;
    do {
      if (edge && edge.vertex) {
        const point = edge.vertex.point;
        faceIndices.push(vertexMap.get(`${point.x},${point.y},${point.z}`)!);
        edge = edge.next;
      }
    } while (edge && edge !== face.edge);
    faces.push(faceIndices);
  });

  return [vertices, faces];
}

interface UseSTLPhysicsProps {
  path: string;
  mass?: number;
  type?: "trimesh" | "convex";
  scale?: number;
}

export function useSTLPhysics({
  path,
  mass = 1,
  type = "trimesh",
  scale = 1,
}: UseSTLPhysicsProps) {
  const originalGeometry = useLoader(STLLoader, path) as THREE.BufferGeometry;
  const meshRef = useRef<THREE.Mesh>(null);

  const scaledGeometry = originalGeometry.clone();
  scaledGeometry.scale(scale, scale, scale);

  let physicsArgs: any;
  let physicsHook: any;

  const glassMaterial = {
    friction: 0.5,
    restitution: 0.1,
  };

  const iceMaterial = {
    friction: 0.1,
    restitution: 0.3,
  };

  if (type === "trimesh") {
    const positions = Array.from(
      scaledGeometry.attributes.position.array
    ) as number[];
    let indices: number[] | undefined;

    if (scaledGeometry.index) {
      indices = Array.from(scaledGeometry.index.array) as number[];
    } else {
      indices = Array.from({ length: positions.length / 3 }, (_, i) => i);
    }

    physicsArgs = [positions, indices, positions, indices];
    physicsHook = useTrimesh;
  } else if (type === "convex") {
    physicsArgs = createConvexPolyhedronArgs(scaledGeometry);
    physicsHook = useConvexPolyhedron;
  } else {
    console.error('Invalid physics shape type. Use "trimesh" or "convex".');
    const positions = Array.from(
      scaledGeometry.attributes.position.array
    ) as number[];
    const indices = scaledGeometry.index
      ? (Array.from(scaledGeometry.index.array) as number[])
      : undefined;
    physicsArgs = [positions, indices];
    physicsHook = useTrimesh;
  }

  const [ref, api] = physicsHook(
    () => ({
      args: physicsArgs,
      mass,
      material: type === "trimesh" ? glassMaterial : iceMaterial,
    }),
    meshRef
  );

  return [ref, api, originalGeometry];
}
