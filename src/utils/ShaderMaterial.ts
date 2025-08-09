import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

export const LiquidMaterial = shaderMaterial(
  {
    u_color: new THREE.Color(0xcf7f1d),
    u_cutHeight: 0.2,
    u_waveStrength: 0.02,
    u_waveFrequency: 4.0,
    u_time: 0,
    u_mouse: new THREE.Vector2(0.5, 0.5),
  },
  // vertex shader
  `
    varying vec3 vWorldPosition;
    void main() {
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float u_cutHeight;
    uniform vec3 u_color;
    uniform float u_waveStrength;
    uniform float u_waveFrequency;
    uniform float u_time;
    uniform vec2 u_mouse;
    varying vec3 vWorldPosition;

    void main() {
      float dist = distance(vWorldPosition.xz, u_mouse.xy);
      float wave = sin(dist * u_waveFrequency - u_time) * u_waveStrength;
      if (vWorldPosition.y > u_cutHeight + wave) discard;
      gl_FragColor = vec4(u_color, 0.5);
    }
  `
);
