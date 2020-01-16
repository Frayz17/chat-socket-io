var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const PORT = process.env.PORT || 5000;

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const router = require('./router');

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    }

    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to the room ${room}`
    });

    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name} has joined.` });

    socket.join(user.room);

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', {user: })
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
