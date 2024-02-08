import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export interface CameraControllerProp {
  position: THREE.Vector3;
}
export const CameraController = ({ position }: CameraControllerProp) => {
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    camera.position.set(position.x, position.y, position.z);
    controls.minDistance = 0;
    controls.maxDistance = Infinity;
    controls.minZoom = 0;
    controls.maxZoom = Infinity;
    controls.minPolarAngle = 0; // radians
    controls.maxPolarAngle = Infinity; // radians
    controls.minAzimuthAngle = -Infinity; // radians
    controls.maxAzimuthAngle = Infinity; // radians
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 3.0;
    controls.panSpeed = 0.5;
    controls.enableDamping = false;
    controls.dampingFactor = 0.3;
    controls.update();

    return () => {
      controls.dispose();
    };
  }, [camera, gl, scene, position]);

  return null;
};
