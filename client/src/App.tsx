import { useContext, useEffect } from "react";
import { socketContext } from "./contexts/socketContext";

const App = () => {
  const { socket } = useContext(socketContext);

  useEffect(() => {
    socket.emit("join", { name: "Ritick" });
  }, []);

  return <div>App</div>;
};

export default App;
