import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

export const socketContext = createContext<null | any>(null);

const socket = io(import.meta.env.VITE_SERVER_ENDPOINT);

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("room-created", ({ roomId }) => {
      console.log("Room Created Successfully", roomId);
      navigate(`/join/${roomId}`);
    });
  }, [socket]);
  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
