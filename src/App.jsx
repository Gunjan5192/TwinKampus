
import React, { useRef } from 'react';
import ModelViewer from './components/ModelViewer';

export default function App() {
  const controlsRef = useRef();

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ModelViewer modelPath="/model.glb" controlsRef={controlsRef} />
    </div>
  );
}


