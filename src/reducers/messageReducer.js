import { messageService } from '../services';
import { messageConstants } from '../constants';

//let messageFetch = messageService.getWelcome()
//const initialeState = messageFetch

const initialState={
    messageFetch: messageService.getWelcome(),
    items: [],
    item: {}
}

export function message(state = initialState, action) {    
    switch(action.type){
        case messageConstants.WELCOME:
            return {
                ...state,
                message : action.message.message
            }
        case messageConstants.POSTS:
            return {
                ...state,
                items: action.message
            }
        default:
            return state
    }
}
