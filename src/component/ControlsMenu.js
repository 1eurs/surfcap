import Button from "./Button";
import DownloadButton from "./DownloadButton";

const ControlsMenu = (props) => {
  return (
    <div id="grid-item">
      <h1>{props.name}</h1>
      <div className="section">
        <Button message="A" name="Scan" />
        <Button message="B" name="Calibrate" />
        <DownloadButton name="Download" />
      </div>
    </div>
  );
};

export default ControlsMenu;
