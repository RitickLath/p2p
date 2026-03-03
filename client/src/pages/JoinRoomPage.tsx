import { useEffect } from "react";
import { useParams } from "react-router-dom";
import JoinRoom from "../components/JoinRoom";

const JoinRoomPage = () => {
  const { id = "" } = useParams();

  useEffect(() => {
    console.log(id);
  });

  return (
    <div>
      <JoinRoom roomId={id} />
    </div>
  );
};

export default JoinRoomPage;
