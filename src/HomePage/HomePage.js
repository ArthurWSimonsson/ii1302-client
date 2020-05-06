import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { messageActions } from '../actions';
import './HomePage.css';
import '../Common.css';


function HomePage() {

    const welcomeMessage = useSelector(state => state.message);
    const visitorFlag = useSelector(state => state.header.visitor);

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(messageActions.welcomeMessage());
    }, []);

    // Office hours are 9:00 to 15:00.
    var path;
    
    if (visitorFlag)
        path = "/visitor/nologin"
    else
        path = "/visitor"

    return(
    <div className = "homePage">
        <div className = "titleDiv">
            <p className = "title">Welcome</p>
        </div>
        <div className = "messageBox">
            <p className = "messageBoxText">{welcomeMessage.message}</p>
        </div>
        <div className = "linkDiv">
            <Link className = "button" to={`${path}`}>Leave a message</Link>
        </div>
    </div>
    )
}


export {HomePage};