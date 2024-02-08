import React, { useContext } from "react";
import { AppContext } from "./AppProvider";

const Controls = () => {
  const { color, pointSize, handleColorChange, handlePointSizeChange } =
    useContext(AppContext);
  const { handleFrontView, handleSideView, handleIsometricView } =
    useContext(AppContext);
  const handleColorInputChange = (event) => {
    handleColorChange(event.target.value);
  };

  const decreasePointSize = () => {
    const newPointSize = parseFloat(pointSize) - 0.001;
    const clampedPointSize = Math.max(newPointSize, 0.001);
    handlePointSizeChange(clampedPointSize);
  };

  const increasePointSize = () => {
    const newPointSize = parseFloat(pointSize) + 0.001;
    const clampedPointSize = Math.min(newPointSize, 1);
    handlePointSizeChange(clampedPointSize);
  };

  return (
    <>
      <div id="grid-item">
        <h1>Settings</h1>
        <div className="control">
          <div className="c1">
            <label htmlFor="color">Color:</label>
            <input
              id="color"
              type="color"
              value={color}
              onChange={handleColorInputChange}
            />
          </div>
          <div className="c2">
            <label>Point Size:</label>
            <button onClick={decreasePointSize}>-</button>
            <input
              className="input"
              value={pointSize}
              style={{ width: "auto", maxWidth: "20%" }}
            ></input>

            <button onClick={increasePointSize}>+</button>
          </div>
          <div className="c2">
            <div className="itemsmall" onClick={handleFrontView}>
              Front
            </div>
            <div className="itemsmall" onClick={handleSideView}>
              Side
            </div>
            <div className="itemsmall" onClick={handleIsometricView}>
              Isometric
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Controls;
