import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    marginBottom: 5
  }
}));

export default function Message({ message: { text, user }, name }) {
  let isSentByCurrentUser = false;
  const classes = useStyles();

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <Box className={classes.root}>
      <Typography variant={'subtitle2'}>{trimmedName}</Typography>
      <Box>
        <Typography variant={'body2'}>{text}</Typography>
      </Box>
    </Box>
  ) : (
    <Box className={classes.root}>
      <Box>
        <Typography variant={'body2'}>{text}</Typography>
      </Box>
      <Typography variant={'subtitle2'}>{user}</Typography>
    </Box>
  );
}
