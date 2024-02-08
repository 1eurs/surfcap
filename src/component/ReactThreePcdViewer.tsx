import PCDModel from "./PCDModel";
import { CameraController } from "./CameraController";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";

interface ReactThreePcdViewerProp {
  url: string;
  color: string;
  pointSize: number;
  cameraPosition: THREE.Vector3;
}

const ReactThreePcdViewer = ({
  url,
  color,
  pointSize,
  cameraPosition,
}: ReactThreePcdViewerProp) => {
  return (
    <div className="canvas-container ">
      <Canvas>
        <CameraController position={cameraPosition} />
        <primitive object={new THREE.AxesHelper(300)} />
        <PCDModel
          fileName={url}
          color={color}
          pointSize={pointSize}
          initialRotation={new THREE.Euler(Math.PI, 0, 0)}
        ></PCDModel>
      </Canvas>
    </div>
  );
};

export default ReactThreePcdViewer;
