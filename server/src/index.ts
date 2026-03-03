import express from "express";
import http from "http";
import { PORT } from "./config/serverConfig.js";
import { Server } from "socket.io";
import { handleRoom } from "./controller/handler.js";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("User connected with socket Id: ", socket.id);

  handleRoom(socket); // OFF LOADED ALL THE TASKS OF HANDLING EVENT

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log("Server is running at port ", PORT);
});
