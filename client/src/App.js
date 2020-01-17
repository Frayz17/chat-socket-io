import React from 'react';
import { Route } from 'react-router-dom';
import Join from 'components/Join';
import Chat from 'components/Chat';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.root}>
        <Route exact path='/'>
          <Join />
        </Route>
        <Route exact path='/chat'>
          <Chat />
        </Route>
      </Container>
    </>
  );
}
