import { postsConstants } from '../constants';
import { postsService } from '../services';

export const postsActions = {
    getPosts,
    getPost,
    sortPosts
};

/**
 * @author Botan Cosar
 * @description returns the full log of messages that have been entered into the database.
 */
function getPosts(){
    return dispatch=>{
        return postsService.getLog()
            .then(
                posts=>{
                    //console.log('mes', posts);
                    dispatch({type: postsConstants.POSTS, posts});
                },
            )
    };
}

/**
 * @author Botan Cosar
 * @description returns a specific entry from the database and displays it on the screen.
 * 
 * @param {*} id the id corresponding to the entry
 */
function getPost(id){
    return dispatch=>{
        return postsService.getEntry(id)
            .then(
                posts=>{
                    //console.log('mes', posts);
                    dispatch({type: postsConstants.POST, posts});
                },
            )
    };
}

/**
 * @author Botan Cosar
 * @description sorts the data from the database based on the key.
 * 
 * @param {*} key used to determine how the data shall be sorted.
 */
function sortPosts(key){
    //console.log('mes',key);
    return{type: postsConstants.SORT_POST, key};
}