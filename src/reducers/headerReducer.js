import { headerConstants } from '../constants';

/* Author Arthur Simonsson. */

/* Reducers for the header */

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