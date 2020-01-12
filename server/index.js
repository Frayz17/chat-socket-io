const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io').apply(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
