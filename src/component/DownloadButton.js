import axios from "axios";
import { AppContext } from "./AppProvider";
import { useContext } from "react";

const DownloadButton = ({ name }) => {
  const appState = useContext(AppContext);

  function extractFilenameFromURL(url) {
    const parts = url.split("/");
    const filename = parts[parts.length - 1];
    return filename;
  }

  const handleDownload = () => {
    const filenameUrl = appState.url;
    const filename = extractFilenameFromURL(filenameUrl);
    console.log(filename);
    const url = `${appState.API}/pcd/${filename}`;
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  };

  const isClickable = appState.url !== "";

  return (
    <div
      className=" item item-disabled"
      onClick={isClickable ? handleDownload : null}
    >
      {name}
    </div>
  );
};

export default DownloadButton;
