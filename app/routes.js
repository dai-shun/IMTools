// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Home';
import LoginInex from "./components/loginInex"
import Message from "./components/message"
export default (
  <Route path="/" component={Home}>
    <IndexRoute component={LoginInex} />
    <Route path="/message" component={Message}/>
  </Route>
);
