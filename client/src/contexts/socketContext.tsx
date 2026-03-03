import { createContext } from "react";
import { io } from "socket.io-client";

export const socketContext = createContext<null | any>(null);

const socket = io(import.meta.env.VITE_SERVER_ENDPOINT);

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
