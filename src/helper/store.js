import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

/* Author Arthur Simonsson. */

/* Redux configuration. Middleware to enable async actions to be executed. Redux-Thunk is used.*/

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);