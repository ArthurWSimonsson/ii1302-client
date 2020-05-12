import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from '../actions';
import './AllPage.css';
import '../Common.css';
import { postsService } from '../services';


function AllPage(props) {

    const posts = useSelector(state => state.posts.items);
    const sortKey=useSelector(state=>state.posts.sortKey);
    const sortDirection=useSelector(state=>state.posts.sortDirection);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(postsActions.getPosts());
    }, []);

    const handleRowClick=(id)=>{
        props.history.push({
            pathname: "/entry",
            id: id
        });
    }

    const handleHeaderClick=(e,sortKey)=>{
        //e.target.className=e.target.className==='sortDown' ?'sortUp':'sortDown';
        onSort(sortKey);
    }

    const onDelete=(id)=>{
        postsService.deleteEntry(id).then(() => {return dispatch(postsActions.getPosts())});
    }

    const onSort=(sortKey)=>{
        dispatch(postsActions.sortPosts(sortKey));
    }

    const sorter=(a,b)=>{
        if(sortKey==='key'){
            return a[sortKey] > b[sortKey] ? sortDirection : -sortDirection
        }
        else{
            return a['value'][sortKey] > b['value'][sortKey] ? sortDirection : -sortDirection
        }
    }
    
    const postItems=posts
        .sort((a, b) => sorter(a,b))
        .map(posts=>(    
            <tr key={posts.id}  
            style={posts.value.read ? {
                    backgroundColor:"darkslategrey"
                }:{
                    backgroundColor:"darkcyan"
                }}>               
                <td onClick={()=>handleRowClick(posts.id)}>
                    <p>{posts.value.author}</p>
                </td>
                <td onClick={()=>handleRowClick(posts.id)}>
                    <p>{posts.value.title}</p>
                </td>
                <td onClick={()=>handleRowClick(posts.id)}>
                    <p>{posts.key}</p>
                </td>
                <td>
                    <button onClick={()=>onDelete(posts.id)}><p>Delete</p></button>
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
                        <th className="arrow-down" onClick={(e)=>handleHeaderClick(e,'author')}>
                            <p className="thText">Author</p>
                        </th>
                        <th className="arrow-down" onClick={(e)=>handleHeaderClick(e,'title')}>
                            <p className="thText">Title</p>
                        </th>
                        <th className="arrow-down" onClick={(e)=>handleHeaderClick(e,'key')}>
                            <p className="thText">Date</p>
                        </th>
                        <th />
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