import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute ({ component: Component, ...rest }) {
    const user = useSelector(state => state.user);

    return(
        <Route {...rest} render={props => (
            user.user == null
                ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                : <Component {...props} />
                // : <Redirect to='/' />
                // : 
        )} />
    )
}

export {PrivateRoute};