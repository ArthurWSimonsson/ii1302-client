import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { postsActions } from '../actions';
import './AllPage.css';
import '../Common.css';


function AllPage(props) {

    const posts = useSelector(state => state.posts.items);
    const entry = useSelector(state => state.posts.item);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postsActions.getPosts());
        //console.log('test',posts);
    }, []);

    const handleClick=(id)=>{
        dispatch(postsActions.getPost(id));

        console.log(entry.message);
        props.history.push('/visitor');
    }
    
    const postItems=posts.map(posts=>(    
            <tr key={posts.id} onClick={()=>handleClick(posts.id)}>               
                <td>
                    <p>{posts.value.author}</p>
                </td>
                <td>
                    <p>{posts.value.title}</p>
                </td>
                <td>
                    <p>{posts.key}</p>
                </td>
            </tr>
    ));

    return(
    <div className = "allPage">
        <div className="titleDiv">
            <p className = "title">Posts</p>
        </div>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>
                            <p>Author</p>
                        </th>
                        <th>
                            <p>Title</p>
                        </th>
                        <th>
                            <p>Date</p>
                        </th>
                    </tr>  
                </thead>
                <tbody>
                    {postItems}
                </tbody>
            </table>
        </div>
    </div>
    )
}


export {AllPage};