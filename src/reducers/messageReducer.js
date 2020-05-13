import { messageService } from '../services';
import { messageConstants } from '../constants';

/**
 * @author Arthur Simonsson
 * @description Reducers for the welcome message
 * 
 * @param {*} state the state of the redux store.
 * @param {*} action the action that was dispatched.
 */
export function message(state = {}, action) {    
    switch(action.type){
        case messageConstants.WELCOME:
            let newState = {...state}
            newState.message = action.message.message;
            // console.log('state', newState)
            return newState
            // return {
            //     message : action.message.message
            // }
        default:
            return state
    }
}
