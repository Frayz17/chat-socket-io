import React from 'react';
import { Route } from 'react-router-dom';
import Join from 'components/Join';
import Chat from 'components/Chat';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import 'typeface-roboto';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container>
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
