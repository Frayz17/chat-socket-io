import React from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import ChatHeader from 'components/ChatHeader';
import MessagesContainer from 'components/MessagesContainer';
import Input from 'components/Input';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import styles from './styles';

let socket;

export default function Chat({ location }) {
  const [name, setName] = React.useState('');
  const [room, setRoom] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const classes = styles();

  const ENDPOINT = 'http://localhost:5000/';
  location = useLocation();

  React.useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search, ENDPOINT]);

  React.useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <ChatHeader room={room} />
        <MessagesContainer messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Paper>
    </Container>
  );
}
