import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from '../actions';
import { postsService } from '../services';
import './Entry.css';
import '../Common.css';

/**
 * @author Botan Cosar
 * @description returns a specific entry from the database and displays it on the screen.
 * 
 * @param {*} props the id corresponding to the entry
 */
function Entry(props) {

    const post = useSelector(state => state.posts.item);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postsActions.getPost(props.location.id));
        var messageDoc={};
        messageDoc.read=true;
        postsService.changeReadStatus(props.location.id,messageDoc);
    }, []);

    return(
    <div className = "entry" data-testid="entry">
        <div className="infoBox">
            <div className = "titleDiv">
                <p className = "title">{post.title}</p>
            </div>
            <div className="authorDate">
                <p className="author">{post.author}</p>
                <p className="date">{post.date}</p>
            </div>
        </div>
        <div className = "messageBox">
            <p className = "messageBoxText">{post.message}</p>
        </div>
    </div>
    )
}

export {Entry};