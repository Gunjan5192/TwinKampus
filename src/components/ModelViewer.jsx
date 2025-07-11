import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Sky } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);

  // Optional: change model color
  scene.traverse((child) => {
    if (child.isMesh) {
     // child.material.color.set('#ff9900'); // orange
    }
  });

  return <primitive object={scene} />;
}

export default function ModelViewer({ modelPath, controlsRef }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />

      {/* Sky background */}
      <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0.4} azimuth={0.25} />

      {/* 3D Model */}
      <Suspense fallback={null}>
        <Model url={modelPath} />
      </Suspense>

      {/* Controls: manual only (mouse rotate, zoom) */}
      <OrbitControls
        ref={controlsRef}
        enableZoom
        enablePan
        enableRotate
        autoRotate={false}
      />
    </Canvas>
  );
}
