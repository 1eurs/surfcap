import { createContext, useState } from "react";
import * as THREE from "three";

const API = "http://10.42.0.130:5000";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [renderPCD, setRenderPCD] = useState(false);
  const [url, setUrl] = useState("");
  const [color, setColor] = useState("#FFFFFF");
  const [pointSize, setPointSize] = useState(0.001);
  const [showLogo, setShowLogo] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [logo, setLogo] = useState("Surfcap");
  const [p, setP] = useState("");
  const [items, setItems] = useState([{}]);

  const [cameraPosition, setCameraPosition] = useState(
    new THREE.Vector3(0, 0, 5)
  );

  const handleFrontView = () => {
    setCameraPosition(new THREE.Vector3(0, 0, 1));
  };

  const handleSideView = () => {
    setCameraPosition(new THREE.Vector3(1, 0, 0));
  };

  const handleIsometricView = () => {
    setCameraPosition(new THREE.Vector3(1, 1, 1));
  };

  const handleShowLogo = () => {
    setShowLogo(false);
  };

  const handleLoading = () => {
    setShowLogo(true);
    setRenderPCD(false);
    setIsLoading(true);
    setP("");
    setLogo("Loading...");
  };

  const handleDone = () => {
    setP("");
    setLogo("Done");
  };

  const handleShowMenu = () => {
    setShowMenu(false);
  };

  const handleRenderPCD = (item, index) => {
    setRenderPCD(true);
    setUrl(item.url);
    setShowLogo(false);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handlePointSizeChange = (newSize) => {
    setPointSize(newSize);
  };

  // The state and functions to be shared via context
  const contextValue = {
    renderPCD,
    items,
    url,
    color,
    pointSize,
    showLogo,
    API,
    showMenu,
    renderPCD,
    isLoading,
    logo,
    p,
    items,
    cameraPosition,
    setItems,
    handleDone,
    handleLoading,
    handlePointSizeChange,
    handleColorChange,
    handleRenderPCD,
    handleShowLogo,
    handleShowMenu,
    handleFrontView,
    handleSideView,
    handleIsometricView,
    setRenderPCD,
    setUrl,
    setShowLogo,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
