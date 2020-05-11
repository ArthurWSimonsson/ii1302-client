import { messageService } from '../services';
import { messageConstants } from '../constants';


// let messageFetch = messageService.getWelcome()
// const initialeState = messageFetch

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
