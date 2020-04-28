import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { userActions } from '../actions';
import '../Common.css';
import './Header.css';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
// import { useGoogleLogin } from 'react-google-login'
 

// let user = false;


function Header() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    const responseGoogle = (response) => {
        dispatch(userActions.logIn(response));
        console.log(response);
    }

    const logout = () => {
        dispatch(userActions.logOut());
    }


    return(
    <div className = "headerDiv">
    {user.user == null ? 
        <div className = "headerButtonDiv">
            {/* <Link className = "logInButton" >Sign in</Link>             */}
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
            <Link to = '/edit' className = "logInButton" >Edit</Link>
            <Link className = "logInButton" >New</Link>
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

export {Header};