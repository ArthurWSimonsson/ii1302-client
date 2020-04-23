import { messageService } from '../services';
import { messageConstants } from '../constants';

let messageFetch = messageService.getWelcome()
const initialeState = messageFetch

export function message(state = {}, action) {    
    switch(action.type){
        case messageConstants.WELCOME:
            return {
                message : action.message.message
            }
        default:
            return state
    }
}
