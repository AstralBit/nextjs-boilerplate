"use client"

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { random } from 'maath';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 1000; // 减少粒子数量
  
  // 生成随机粒子位置
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    random.inSphere(positions, { radius: 5 });
    return positions;
  }, []);

  // 简化动画效果
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta / 20; // 只保留一个方向的旋转
    }
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={1} // 固定使用1倍像素比
        performance={{ min: 0.5 }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}