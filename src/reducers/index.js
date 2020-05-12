import { combineReducers } from 'redux';
import {message} from './messageReducer';
import {user} from './userReducer';
import {posts} from './postsReducer';
import {header} from './headerReducer'

const rootReducer = combineReducers({
    message,
    user,
    posts,
    header
});
  
//   = message;

export default rootReducer;