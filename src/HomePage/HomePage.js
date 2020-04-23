import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { messageActions } from '../actions';
import './HomePage.css';
import '../Common.css';


function HomePage() {

    const welcomeMessage = useSelector(state => state.message);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(messageActions.welcomeMessage());
        console.log('test',welcomeMessage)
    }, []);

    // Office hours are 9:00 to 15:00.

    return(
    <div className = "homePage">
        <div className = "titleDiv">
            <p className = "title">Welcome</p>
        </div>
        <div className = "messageBox">
            <p className = "messageBoxText">{welcomeMessage}</p>
        </div>
        <div className = "linkDiv">
            <Link className = "button" to="/visitor">Leave a message</Link>
        </div>
    </div>
    )
}


export {HomePage};