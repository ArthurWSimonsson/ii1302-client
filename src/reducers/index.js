import { combineReducers } from 'redux';
import {message} from './messageReducer';
import {user} from './userReducer';
import {posts} from './postsReducer';
import {header} from './headerReducer'

/**
 * @author Arthur Simonsson
 * @author Botan Cosar
 * @description Reducers are combined. They are separated at first for clarity.
 */
const rootReducer = combineReducers({
    message,
    user,
    posts,
    header
});

//   = message;

export default rootReducer;