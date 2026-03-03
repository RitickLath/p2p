import express from "express";
import http from "http";
import { PORT } from "./config/serverConfig.js";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("User connected with socket Id: ", socket.id);

  socket.on("join", (data: any) => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log("Server is running at port ", PORT);
});
