import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Room = ({ isMobile }) => {
  const room = useGLTF("./isometric_bedroom/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        auto
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={room.scene}
        scale={isMobile ? 0.7 : 1.2}
        position={isMobile ? [0, -1, 0] : [5, -1, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const RoomCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          enableRotate={true}
          // autoRotate={true}
          // autoRotateSpeed={2}
          target={[0, 0, 0]}
        />
        <Room isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RoomCanvas;
