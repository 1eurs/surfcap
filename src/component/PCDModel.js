import { useLoader } from "@react-three/fiber";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader";
import { PointsMaterial, Points } from "three";
import * as THREE from "three";

const PCDModel = ({ fileName, pointSize, color, initialRotation }) => {
  const data = useLoader(PCDLoader, fileName);

  if (data) {
    data.geometry.center();
  }

  return (
    <>
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
    </>
  );
};

export default PCDModel;
