import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

function Model() {
  const { scene } = useGLTF("/car.glb");
  return <primitive object={scene} />;
}

function CameraController() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cameraRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!cameraRef.current) return;

    // Posición base de la cámara
    const baseX = -10;
    const baseY = 2;
    const baseZ = -8;

    // Factor de movimiento (ajusta estos valores para más o menos movimiento)
    const movementFactor = 2;

    // Interpolación suave
    cameraRef.current.position.x = baseX + mousePosition.x * movementFactor;
    cameraRef.current.position.y = baseY + -mousePosition.y * movementFactor;
    cameraRef.current.position.z = baseZ;

    // La cámara siempre mira al centro
    cameraRef.current.lookAt(0, 0, 0);
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[-10, 3, -8]}
      fov={75}
    />
  );
}

const Index = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: -1,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas>
        <CameraController />
        <Model />
      </Canvas>
    </div>
  );
};

export default Index;
