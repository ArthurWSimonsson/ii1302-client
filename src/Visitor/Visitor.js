import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { messageActions } from '../actions';
import { messageService } from '../services';
import { formatDate} from '../helper';
import './Visitor.css';
import '../Common.css';

// {
//     "id" : "testing",
//     "author": "Test T",
//     "date": "2020/10/10 10:00:00",
//     "title": "Besök",
//     "message": "hej hej hej",
//     "read": true
// }
  

function Visitor (props) {
    // const [name, setName] = useState();


    const handleSubmit = (evt) => {
        evt.preventDefault()    
        var messageDoc = {};

        messageDoc.date = formatDate();
        messageDoc.author = evt.target.author.value;
        messageDoc.title = evt.target.title.value;
        messageDoc.message = evt.target.message.value;
        messageDoc.read = false;
        messageService.leaveMessage(messageDoc)
        // const data = new FormData(evt.target);
        // console.log('evt', evt.target[2].value)
        // console.log('evt', evt.target.message.value)
        console.log('test', messageDoc)

        props.history.push('/')
        // setName(evt)
        // setName(evt)
        // console.log(name)
        // evt.preventDefault();
        // alert(`Submitting Name ${name}`)
    }

    // const handleChange = (evt) => {
        // console.log('name', name)
        // setName(evt)
        // console.log('prop ',props)
        // props.history.push('/')
    // }

    return (
        <div className = "visitorMainDiv">        
            <div className = "formDiv">
                <form className = 'leaveMessageForm' onSubmit={handleSubmit}>
                    <p className = "title">Leave a message</p>
                    <input className = 'authorInput' name = 'author' type = 'text' placeholder='Author' required></input>
                    <input className = 'titleInput' name = 'title' type = 'text' placeholder='Title' required></input>
                    <textarea className = 'messageInput' name = 'message' type = 'text' placeholder='Leave message...' required></textarea>
                    <input className = "button" type='submit' value='Submit'></input>
                    {/* <Link to = '/' className = "button" type ='submit'>Submit</Link> */}
                </form>
            </div>

        </div>
    )
}

export {Visitor};