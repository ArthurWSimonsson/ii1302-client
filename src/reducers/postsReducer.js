import { postsConstants } from '../constants';

const initialState={
    items: [],
    item: {},
    sortKey: {},
    sortDirection: 1
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
        case postsConstants.SORT_POST:
            return{
                ...state,
                sortKey: action.key,
                sortDirection: action.key===state.sortKey ? -state.sortDirection:state.sortDirection
            }
        default:
            return state
    }
}