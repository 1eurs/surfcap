import { useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "./AppProvider";

const PCDFiles = () => {
  const appState = useContext(AppContext);

  const fetchPCDFiles = async () => {
    try {
      const response = await axios.get(`${appState.API}/pcd_files`);
      const newPCDFiles = response.data;
      const updatedItems = newPCDFiles.map((filename) => ({
        name: filename,
        url: `${appState.API}/pcd/${filename}`,
      }));
      appState.setItems(updatedItems);
    } catch (error) {
      console.error("Error fetching PCD files:", error);
    }
  };

  useEffect(() => {
    fetchPCDFiles();
  }, []);

  return <></>;
};

export default PCDFiles;
