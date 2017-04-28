// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import connect from "./connect";
import messages from "./messages";
import sender from "./sender";
import menu from "./menu";
const rootReducer = combineReducers({
  form,
  menu,
  connect,
  routing,
  messages,
  sender
});

export default rootReducer;
