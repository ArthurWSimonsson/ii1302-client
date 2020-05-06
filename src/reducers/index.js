import { combineReducers } from 'redux';
import {message} from './messageReducer'
import {user} from './userReducer'
import {header} from './headerReducer'


const rootReducer = combineReducers({
    message,
    user,
    header
});
  
//   = message;

export default rootReducer;