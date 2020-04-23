import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import '../Common.css';
import './Header.css';

let user = false;

function Header() {
    return(
    <div className = "headerDiv">
    {user? 
        
            <Link className = "logInButton" >Sign in</Link>
        
        :
        <div className = "headerButtonDiv">
            
            <Link to = '/' className = "logInButton" >Home</Link>
            <Link className = "logInButton" >Edit</Link>
            <Link className = "logInButton" >New</Link>
            <Link className = "logInButton" >All</Link>
            <button className = "logInButton">Sign out</button>
        </div> 
    }
    </div> 

    )
}

export {Header};