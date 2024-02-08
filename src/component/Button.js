import axios from "axios";
import { AppContext } from "./AppProvider";
import { useContext } from "react";

const Button = ({ message, name }) => {
  const { API, handleLoading } = useContext(AppContext);
  const handleClick = () => {
    axios
      .post(`${API}/send_message`, { message })
      .then((response) => {
        handleLoading();
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="item item-disabled" onClick={handleClick}>
        {name}
      </div>
    </>
  );
};

export default Button;
