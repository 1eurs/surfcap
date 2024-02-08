import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader";
import { Loader } from "./Loader";
import { PointsMaterial, Points } from "three";
import * as THREE from "three";

interface PCDModelProp {
  fileName: string;
  pointSize: number;
  color: string;
  initialRotation: THREE.Euler;
}

const PCDModel = ({
  fileName,
  pointSize,
  color,
  initialRotation,
}: PCDModelProp) => {
  const data: Points = useLoader(PCDLoader, fileName);

  if (data) {
    data.geometry.center();
  }

  return (
    <Suspense fallback={<Loader />}>
      {data && (
        <points
          geometry={data.geometry}
          rotation={initialRotation}
          material={
            new PointsMaterial({
              size: pointSize,
              color: color,
              sizeAttenuation: true,
            })
          }
        />
      )}
    </Suspense>
  );
};

export default PCDModel;
