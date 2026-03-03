import { useContext, useEffect } from "react";
import { socketContext } from "../contexts/socketContext";

const JoinRoom = ({ roomId }: { roomId: string }) => {
  const { socket } = useContext(socketContext);

  useEffect(() => {
    socket.emit("join-room", { requestedJoinRoomId: roomId });
  }, [roomId]);
  return <div>JoinRoom</div>;
};

export default JoinRoom;
