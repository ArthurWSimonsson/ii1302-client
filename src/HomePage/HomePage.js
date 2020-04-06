import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './HomePage.css';
import '../Common.css';


function HomePage() {
    return(
    <div>
        <p>Hello</p>
        <div id = "messageBox">
            <p id = "messageBoxText">Office hours are 9:00 to 15:00.</p>
        </div>
        <div className = "linkDiv">
            <Link className = "button" >Leave a message</Link>
        </div>
    </div>
    )
}

export {HomePage};