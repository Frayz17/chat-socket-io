const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io').apply(server);

const PORT = process.env.PORT || 5000;

const router = require('./router');

io.on('connection', (socket) => {
  console.log('a user connected!!!!');

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
