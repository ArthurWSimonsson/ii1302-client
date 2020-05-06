import { combineReducers } from 'redux';
import {message} from './messageReducer';
import {user} from './userReducer';
import {posts} from './postsReducer';

const rootReducer = combineReducers({
    message,
    user,
    posts
});
  
//   = message;

export default rootReducer;