import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'static',
    backgroundColor: blueGrey[800]
  },
  link: {
    display: 'flex'
  },
  closeIcon: {
    fontSize: 25,
    color: 'white'
  },
  title: {
    marginLeft: 5,
    flexGrow: 1
  }
}));

export default function ChatHeader({ room }) {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography className={classes.title} variant='h6'>
          {room}
        </Typography>

        <Link color='secondary' className={classes.link} href='/'>
          <CloseIcon className={classes.closeIcon} />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
