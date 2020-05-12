import { headerConstants } from '../constants';

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