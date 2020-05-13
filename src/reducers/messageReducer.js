import { messageService } from '../services';
import { messageConstants } from '../constants';

/* Author Arthur Simonsson. */

/* Reducers for the welcome message */

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
