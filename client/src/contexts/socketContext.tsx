import { createContext, useEffect } from "react";
import { io } from "socket.io-client";

export const socketContext = createContext<null | any>(null);

const socket = io(import.meta.env.VITE_SERVER_ENDPOINT);

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    socket.on("room-created", ({ roomId }) => {
      console.log("Room Created Successfully", roomId);
      // Will Navigate to the room
    });
  }, [socket]);
  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
