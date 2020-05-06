import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { messageActions } from '../actions';
import { messageService } from '../services';
import './EditPage.css';
import '../Common.css';

function EditPage(props) {

    const welcomeMessage = useSelector(state => state.message);
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        // evt.preventDefault()    
        var messageDoc = {};

        messageDoc.message = evt.target.message.value;
        messageService.changeWelcome(messageDoc).then(() => {return dispatch(messageActions.welcomeMessage())});

        props.history.push('/')
    }

    return(
    <div className = "EditPageMainDiv">
        <form className = 'leaveMessageForm' onSubmit={handleSubmit}>
            <p className = "title">Edit home message</p>
            <textarea className = 'newWelcomeInput' name = 'message' type = 'text' placeholder='Leave new home screen message.' required></textarea>
            <input className = "button" type='submit' value='Change'></input>
            {/* <Link to = '/' className = "button" type ='submit'>Submit</Link> */}
        </form>
    </div>
    )
}


export {EditPage};