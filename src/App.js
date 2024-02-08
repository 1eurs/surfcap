import { useContext, useState } from "react";
import Overlay from "./component/Overlay";
import { AppContext } from "./component/AppProvider";
import Scans from "./component/Scans";
import "./App.css";
import Controls from "./component/Controls";
import ReactThreePcdViewer from "./component/ReactThreePcdViewer";
import ControlsMenu from "./component/ControlsMenu";
import { motion } from "framer-motion";
import MessageReceiver from "./component/MessageReceiver";
import PCDFiles from "./component/PCDFiles";

const App = () => {
  const appState = useContext(AppContext);
  const [isHidden, setIsHidden] = useState(false);
  const items = [
    {
      url: "https://raw.githubusercontent.com/PointCloudLibrary/pcl/master/test/bunny.pcd",
      name: "Bunny",
    },

    {
      url: process.env.PUBLIC_URL + "/five_people.pcd",
      name: "five people",
    },
  ];

  const handleHide = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <PCDFiles />
      {/* <MessageReceiver /> */}
      <Overlay
        showLogo={appState.showLogo}
        color={appState.color}
        logo={appState.logo}
        p={appState.p}
      />
      {appState.renderPCD && (
        <ReactThreePcdViewer
          url={appState.url}
          color={appState.color}
          pointSize={appState.pointSize}
          cameraPosition={appState.cameraPosition}
        />
      )}
      <motion.div className="grid-container">
        <button className="ButtonHideMenu" onClick={handleHide}>
          Menu
        </button>

        <motion.div
          className="grid-item"
          initial={{ x: 0 }}
          animate={isHidden ? { x: "100%" } : { x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <ControlsMenu name="Controls" />
        </motion.div>
        <motion.div
          className="grid-item"
          initial={{ x: 0 }}
          animate={isHidden ? { x: "100%" } : { x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <Controls />
        </motion.div>
        <motion.div
          className="grid-item"
          initial={{ x: 0 }}
          animate={isHidden ? { x: "100%" } : { x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <Scans
            name="Scans"
            items={items}
            handleRenderPCD={appState.handleRenderPCD}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default App;
