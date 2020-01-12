import React from 'react';
import { Route } from 'react-router-dom';
import Join from 'components/Join';
import Chat from 'components/Chat';

export default function App() {
  return (
    <>
      <Route exact path='/'>
        <Join />
      </Route>
      <Route exact path='/chat'>
        <Chat />
      </Route>
    </>
  );
}
