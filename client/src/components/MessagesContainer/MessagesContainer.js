import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from 'components/Message';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 381
  },
  '@media (max-width: 599px)': {
    root: {
      height: 389
    }
  }
}));

export default function MessagesContainer({ messages, name }) {
  const classes = useStyles();
  return (
    <ScrollToBottom className={classes.root}>
      {messages.map((message, i) => {
        return <Message key={i} message={message} name={name} />;
      })}
    </ScrollToBottom>
  );
}
