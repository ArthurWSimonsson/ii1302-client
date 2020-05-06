import { postsConstants } from '../constants';

const initialState={
    items: [],
    item: {}
}

export function posts(state = initialState, action) {    
    switch(action.type){
        case postsConstants.POSTS:
            return {
                ...state,
                items: action.posts
            }
        case postsConstants.POST:
            return {
                ...state,
                item: action.posts
            }
        default:
            return state
    }
}