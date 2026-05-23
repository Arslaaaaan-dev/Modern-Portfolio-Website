"use client";
import React from "react";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

const Stars = (props: React.ComponentProps<typeof Points>) => {
  const ref = useRef<THREE.Points>(null);

  const sphere = useMemo(() => {
    const arr = new Float32Array(5000 * 3);
    random.inSphere(arr, { radius: 1.5 });

    for (let i = 0; i < arr.length; i++) {
        if (Number.isNaN(arr[i])) {
            arr[i] = 0;
        }
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const AbstractShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#bc13fe"
        wireframe
        transparent
        opacity={0.15}
        emissive="#bc13fe"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Stars />
        <AbstractShape />
        <Preload all />
      </Canvas>
    </div>
  );
}
