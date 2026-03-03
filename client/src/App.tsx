import { useContext, useEffect } from "react";
import { socketContext } from "./contexts/socketContext";
import CreateRoom from "./components/CreateRoom";

const App = () => {
  const { socket } = useContext(socketContext);

  useEffect(() => {
    socket.emit("join", { name: "Ritick" });
  }, []);

  return (
    <div>
      <CreateRoom />
    </div>
  );
};

export default App;
