import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
    // flexDirection: 'column'
  },
  input: {
    flexGrow: 10
  },
  btn: {
    flexGrow: 2
  }
}));

export default function Input({ setMessage, sendMessage, message }) {
  const classes = useStyles();
  return (
    <Box>
      <form className={classes.root}>
        <TextField
          className={classes.input}
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={(event) =>
            event.key === 'Enter' ? sendMessage(event) : null
          }
          label='message...'
          variant='outlined'
        />
        <Button className={classes.btn} onClick={(e) => sendMessage(e)}>
          send
        </Button>
      </form>
    </Box>
  );
}
