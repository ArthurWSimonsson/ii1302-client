import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { messageActions } from '../actions';
import { messageService } from '../services';
import './EditPage.css';
import '../Common.css';

/**
 * @author Arthur Simonsson
 * @description Page where the message shown on the screen of the door communicator can be edited.
 * @param {} props 
 */
function EditPage(props) {

    const welcomeMessage = useSelector(state => state.message);
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        // evt.preventDefault()    
        var messageDoc = {};

        messageDoc.message = evt.target.message.value;
        messageService.changeWelcome(messageDoc).then(() => {dispatch(messageActions.welcomeMessage())});

        props.history.push('/')
    }

    return(
    <div className = "EditPageMainDiv">
        <form className = 'leaveMessageForm' onSubmit={handleSubmit}>
            <p className = "title">Edit home message</p>
            <textarea className = 'newWelcomeInput' name = 'message' type = 'text' placeholder='Leave new home screen message (max 70 characters).' maxLength = '70' required></textarea>
            <input className = "button" type='submit' value='Change'></input>
            {/* <Link to = '/' className = "button" type ='submit'>Submit</Link> */}
        </form>
    </div>
    )
}


export {EditPage};