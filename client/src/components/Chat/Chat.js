import React from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

let socket;

export default function Chat({ location }) {
  const [name, setName] = React.useState('');
  const [room, setRoom] = React.useState('');
  const [users, setUsers] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const ENDPOINT = 'http://localhost:5000/';
  location = useLocation();

  React.useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [location.search, ENDPOINT]);

  return <div>Chat</div>;
}
