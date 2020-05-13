/* Author Arthur Simonsson. */

/* When a message is written then the current date is computed and sent with the message. */

export function formatDate() {
    var today = new Date();

    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localTime = (new Date(Date.now() - tzoffset)).toISOString().replace('T', ' ').substr(0, 19);

    return localTime;
}

