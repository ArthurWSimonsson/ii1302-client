import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from '../actions';
import './AllPage.css';
import '../Common.css';
import { postsService } from '../services';

/**
 * @author Botan Cosar
 * @description returns the full log of messages that have been entered into the database.
 * 
 * @param {*} props used to access the entry page.
 */
function AllPage(props) {

    const posts = useSelector(state => state.posts.items);
    const sortKey=useSelector(state=>state.posts.sortKey);
    const sortDirection=useSelector(state=>state.posts.sortDirection);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(postsActions.getPosts());
    }, []);

    /**
     * @author Botan Cosar
     * @description fetches an entry page corresponding to the id of the row that was clicked.
     * 
     * @param {*} id the id of the row.
     */
    const handleRowClick=(id)=>{
        props.history.push({
            pathname: "/entry",
            id: id
        });
    }

    /**
     * @author Botan Cosar
     * @description handles calls made on clicking the header of the table.
     * 
     * @param {*} e the click event
     * @param {*} sortKey used by the onSort function.
     */
    const handleHeaderClick=(e,sortKey)=>{
        //e.target.className=e.target.className==='sortDown' ?'sortUp':'sortDown';
        onSort(sortKey);
    }

    /**
     * @author Botan Cosar
     * @description deletes an entry from the database corresponding to the row of the delete button that was pressed.
     * 
     * @param {*} id the id of the row whose delete button was clicked.
     */
    const onDelete=(id)=>{
        postsService.deleteEntry(id).then(() => {return dispatch(postsActions.getPosts())});
    }

    /**
     * @author Botan Cosar
     * @description dispatches the name of the column to sort by to the redux store.
     * 
     * @param {*} sortKey the name of the column to sort.
     */
    const onSort=(sortKey)=>{
        dispatch(postsActions.sortPosts(sortKey));
    }

    /**
     * @author Botan Cosar
     * @description uses the sortKey in the redux store to decide how the table shall be sorted.
     * 
     * @param {*} a an item to compare with another for sorting.
     * @param {*} b an item to compare with another for sorting.
     */
    const sorter=(a,b)=>{
        if(sortKey==='key'){
            return a[sortKey] > b[sortKey] ? sortDirection : -sortDirection
        }
        else{
            return a['value'][sortKey] > b['value'][sortKey] ? sortDirection : -sortDirection
        }
    }
    
    /**
     * @author Botan Cosar
     * @description maps the posts in the database to rows in the table.
     */
    const postItems=posts
        .sort((a, b) => sorter(a,b))
        .map(posts=>(    
            <tr data-testid='data' key={posts.id}  
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