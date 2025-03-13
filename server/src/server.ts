import express from "express";
import { UsersController } from "./express/controllers/users.controller.js";

const server = express();
server.use(express.json());

server.use("/users", UsersController.router());

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
