import { postsConstants } from '../constants';

/**
 * @author Botan Cosar
 * @description the initial state of this reducer.
 */
const initialState={
    items: [],
    item: {},
    sortKey: 'key',
    sortDirection: 1
}

/**
 * @author Botan Cosar
 * @description alters the state of the redux store based on the action that has been dispatched.
 * 
 * @param {*} state the state of the redux store.
 * @param {*} action the action that was dispatched.
 */
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