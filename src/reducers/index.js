import { combineReducers } from 'redux';
import {message} from './messageReducer'
import {user} from './userReducer'

const rootReducer = combineReducers({
    message,
    user
});
  
//   = message;

export default rootReducer;