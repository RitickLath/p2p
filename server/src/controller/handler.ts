import type { Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";

const rooms: Record<string, string[]> = {}; // {roomId -> [socketId1, socketId2]}

export const handleRoom = (socket: Socket) => {
  const handleCreateRoom = () => {
    const roomId = uuidv4();
    rooms[roomId] = [socket.id]; // Push the socketId of the Admin at First Position and make key as roomId

    console.log("Room created with ID: ", roomId);
    socket.emit("room-created", { roomId });
  };

  const handleJoinRoom = (requestedJoinRoomId: string) => {
    if (rooms[requestedJoinRoomId]) {
      rooms[requestedJoinRoomId].push(socket.id); // Push Socket Id to the room they belongs to

      console.log("Room joined with ID: ", requestedJoinRoomId);
      socket.emit("room-joined", { requestedJoinRoomId });
    }
  };

  // Events
  socket.on("create-room", handleCreateRoom);

  socket.on("join-room", (requestedJoinRoomId) =>
    handleJoinRoom(requestedJoinRoomId),
  );
};
