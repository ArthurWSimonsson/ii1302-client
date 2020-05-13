import { userConstants } from '../constants';
// import { messageService } from '../services';

/* Author Arthur Simonsson */

/* Redux actions related to login/logout of a user. */

export const userActions = {
    logIn,
    logOut
};

function logIn (user) {
    return {type: userConstants.LOG_IN, user}
}

function logOut() {
    return {type : userConstants.LOG_OUT}
}