import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '15vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: 350,
    minHeight: 300
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: 300
  }
}));

export default function Join() {
  const [name, setName] = React.useState('');
  const [room, setRoom] = React.useState('');

  const classes = useStyles();

  const checkNameRoomFilled = (e) => {
    return !name || !room ? e.preventDefault() : null;
  };

  const handlerSetName = (e) => {
    setName(e.target.value);
  };

  const handlerSetRoom = (e) => {
    setRoom(e.target.value);
  };

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Box className={classes.box}>
          <Typography variant={'h4'}>Join</Typography>
          <TextField
            label='Name'
            variant='outlined'
            value={name}
            onChange={handlerSetName}
          />
          <TextField
            label='Room'
            variant='outlined'
            value={room}
            onChange={handlerSetRoom}
          />
          <Button
            color='primary'
            component={RouterLink}
            onClick={checkNameRoomFilled}
            to={`/chat?name=${name}&room=${room}`}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}
