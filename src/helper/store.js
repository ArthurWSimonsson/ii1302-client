import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

/**
 * @author Arthur Simonsson
 * @author Botan Cosar
 * @description Redux configuration. Middleware to enable async actions to be executed. Redux-Thunk is used.
 */
export const store = createStore(
    rootReducer,
    //compose(
        applyMiddleware(thunkMiddleware),
    //    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    //)
);