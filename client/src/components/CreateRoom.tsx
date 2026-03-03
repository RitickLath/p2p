import { useContext } from "react";
import { socketContext } from "../contexts/socketContext";

const CreateRoom = () => {
  const { socket } = useContext(socketContext);

  const handleClick = () => {
    socket.emit("create-room");
  };

  return <button onClick={handleClick}>Create Room</button>;
};

export default CreateRoom;
