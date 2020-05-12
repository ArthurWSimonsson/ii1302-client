import { postsConstants } from '../constants';
import { postsService } from '../services';

export const postsActions = {
    getPosts,
    getPost,
    sortPosts
};

function getPosts(){
    return dispatch=>{
        postsService.getLog()
            .then(
                posts=>{
                    //console.log('mes', posts);
                    dispatch({type: postsConstants.POSTS, posts});
                },
            )
    };
}

function getPost(id){
    return dispatch=>{
        postsService.getEntry(id)
            .then(
                posts=>{
                    //console.log('mes', posts);
                    dispatch({type: postsConstants.POST, posts});
                },
            )
    };
}

function sortPosts(key){
    //console.log('mes',key);
    return{type: postsConstants.SORT_POST, key};
}