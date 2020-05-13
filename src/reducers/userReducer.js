import { userConstants } from '../constants';


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

