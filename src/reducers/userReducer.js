import { userConstants } from '../constants';

/**
 * @author Arthur Simonsson
 * @description Reducers for the user
 * 
 * @param {*} state the state of the redux store.
 * @param {*} action the action that was dispatched.
 */
export function user(state = {}, action) {    
    switch(action.type){
        case userConstants.LOG_IN:
            return {
                user : action.user
            }
        case userConstants.LOG_OUT:
            return {};
        default:
            return state
    }
}

