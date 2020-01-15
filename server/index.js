var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const PORT = process.env.PORT || 5000;

const router = require('./router');

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
