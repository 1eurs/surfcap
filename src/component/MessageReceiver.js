import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "./AppProvider";

const MessageReceiver = () => {
  const { API, handleDone } = useContext(AppContext);

  useEffect(() => {
    const checkMessage = async () => {
      try {
        const response = await axios.get(`${API}/receive_message`);
        const message = response.data;
        if (message === "done") {
          handleDone();
          console.log('Received "done" message');
        } else {
        }
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };
    const intervalId = setInterval(checkMessage, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return null;
};

export default MessageReceiver;
