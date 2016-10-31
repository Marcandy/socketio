const express = require("express")
    , app     = express()
    , server  = require("http").createServer(app)
    , io      = require("socket.io").listen(server)
    , port    = 8888;

app.use(express.static(`${__dirname}/public`));

server.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));


// TODO
// SOCKET STUFF WILL GO HERE

const connections = [];
const users       = [];

io.sockets.on("connection", socket => {
  connections.push(socket);
  console.log(`Connected: ${connections.length} socket(s) on ${port}`);

  socket.on("disconnect", data => {
    connections.splice(connections.indexOf(data), 1);
    console.log(`Disconnected: ${connections.length} socket(s) on ${port}`);
    users.splice(users.indexOf(socket.username), 1);
    updateUsers();
  })

  socket.on("new user", data => {
    socket.username = data;
    users.push(data);
    updateUsers();
  });

  socket.on("send message", data => {
    io.sockets.emit("get message", {user: socket.username, msg: data});
  });

  function updateUsers(){
    io.sockets.emit("update users", users);
  }

  

});
