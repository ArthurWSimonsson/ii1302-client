import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageActions } from '../actions';
import './AllPage.css';
import '../Common.css';


function AllPage() {

    const posts = useSelector(state => state.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(messageActions.getPosts());
        //console.log('test',posts)
    }, []);
    
    const postItems=posts.map(posts=>(
        <tr key={posts.key}>
            <td><p>{posts.value.author}</p></td>
            <td><p>{posts.value.title}</p></td>
            <td><p>{posts.key}</p></td>
        </tr>
    ));

    return(
    <div className = "allPage">
        <div className="titleDiv">
            <p className = "title">Entries</p>
        </div>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th><p>Author</p></th>
                        <th><p>Title</p></th>
                        <th><p>Date</p></th>
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