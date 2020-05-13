import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { userActions } from '../actions';
import { headerActions } from '../actions';
import '../Common.css';
import './Header.css';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
 
/* Author Arthur Simonsson. */

/* Header of the application. If a visitor scans the QR code then the url has '/nologin' in it,
   then a blank header will be shown. Otherwise it is possible to log in and gain access to 
   admin priviledges. */


function Header() {
    const user = useSelector(state => state.user);
    const visitorFlag = useSelector(state => state.header.visitor)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('flagHeader', visitorFlag)
    // }, []);


    const responseGoogle = (response) => {
        dispatch(userActions.logIn(response));
        console.log('repsonse', response)
    }

    const logout = () => {
        dispatch(userActions.logOut());
    }

    if (window.location.pathname == '/nologin' || window.location.pathname == '/visitor/nologin') {
        dispatch(headerActions.noHeader())
    }

    if (!visitorFlag) 
    {
    return(
    <div className = "headerDiv">
    {user.user == null ? 
        <div className = "headerButtonDiv">
            <GoogleLogin
                clientId="106553078705-vtn4pu3rkukcnr7bu0bkbre18l2s5la6.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div> 
        :
        <div className = "headerButtonDiv">
            
            <Link to = '/' className = "logInButton" >Home</Link>
            <Link to = '/edit/choice' className = "logInButton" >Edit</Link>
            <Link className = "logInButton" >All</Link>
            <GoogleLogout
                clientId="106553078705-vtn4pu3rkukcnr7bu0bkbre18l2s5la6.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
            />
        </div> 
    }
    </div> 
    )
    }
    else {
        return (
            <div className = "headerDiv"/>
        )
    }
}

export {Header};