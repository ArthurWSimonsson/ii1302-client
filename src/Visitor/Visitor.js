import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { messageActions } from '../actions';
import { messageService } from '../services';
import { formatDate} from '../helper';
import './Visitor.css';
import '../Common.css';

// {
//     "author": "Test T",
//     "date": "2020/10/10 10:00:00",
//     "title": "Besök",
//     "message": "hej hej hej",
//     "read": false
// }
  

function Visitor (props) {
    const visitorFlag = useSelector(state => state.header.visitor);



    const handleSubmit = (evt) => {
        // evt.preventDefault()    
        var messageDoc = {};

        messageDoc.date = formatDate();
        messageDoc.author = evt.target.author.value;
        messageDoc.title = evt.target.title.value;
        messageDoc.message = evt.target.message.value;
        messageDoc.read = false;
        messageService.leaveMessage(messageDoc)

        var path = visitorFlag ? "/nologin" : "/";

        props.history.push(`${path}`)
    }


    return (
        <div className = "visitorMainDiv">        
            <div className = "formDiv">
                <form className = 'leaveMessageForm' onSubmit={handleSubmit}>
                    <p className = "title">Leave a message</p>
                    <input data-testid="author-input" className = 'authorInput' name = 'author' type = 'text' placeholder='Author' required></input>
                    <input className = 'titleInput' name = 'title' type = 'text' placeholder='Title' required></input>
                    <textarea className = 'messageInput' name = 'message' type = 'text' placeholder='Please leave a message.' required></textarea>
                    <input className = "button" type='submit' value='Submit'></input>
                </form>
            </div>

        </div>
    )
}

export {Visitor};