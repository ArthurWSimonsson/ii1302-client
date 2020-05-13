import { headerConstants } from '../constants';

/**
 * @author Arthur Simonsson
 * @description Reducers for the header
 * 
 * @param {*} state the state of the redux store.
 * @param {*} action the action that was dispatched.
 */
export function header(state = {}, action) {    
    switch(action.type){
        case headerConstants.NO_HEADER:
            return {
                visitor : true
            };
        default:
            return state
    }
}