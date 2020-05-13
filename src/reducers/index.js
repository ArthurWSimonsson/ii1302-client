import { combineReducers } from 'redux';
import {message} from './messageReducer'
import {user} from './userReducer'
import {header} from './headerReducer'

/* Author Arthur Simonsson. */

/* Reducers are combined. They are separated at first for clarity. */

const rootReducer = combineReducers({
    message,
    user,
    header
});

//   = message;

export default rootReducer;