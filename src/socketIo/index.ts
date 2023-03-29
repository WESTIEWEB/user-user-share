import app from "..";
const socketIO = require("socket.io");
import http from "http";

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket: any) => {
    console.log("New client connected");
    socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(3000, () => console.log("Listening on port 3000"));

