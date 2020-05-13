export const messageService = {
    getWelcome,
    leaveMessage,
    changeWelcome
};

/**
 * Services (async calls) to send requests to the express server and fetch relevant information.
 */

/**
 * @author Arthur Simonsson
 * @description Gets the main message
 */
function getWelcome() {
    return fetch('https://ii1302-server.eu-gb.mybluemix.net/api/message/welcome')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
     return data
    });
}

/**
 * @author Arthur Simonsson
 * @description Changes main message
 * 
 * @param {*} message 
 */
function changeWelcome(message) {
    // console.log('service', message)
    const requestOptions = {
        method: 'PUT',    
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    };
    //console.log('service', requestOptions)

    return fetch(`https://ii1302-server.eu-gb.mybluemix.net/api/message/welcome`, requestOptions)
    // .then((response) => {
    //     console.log('json', response)
    //     return JSON.parse(response) //response.json();
    // })
    .then((data) => {
     return data
    });
}

/**
 * @author Arthur Simonsson
 * @description Leaves a message to the officer holder
 * 
 * @param {*} message 
 */
function leaveMessage(message) {
    // console.log('service', message)
    const requestOptions = {
        method: 'POST',    
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    };
    // console.log('service', requestOptions)

    return fetch(`https://ii1302-server.eu-gb.mybluemix.net/api/message/`, requestOptions)
    // .then((response) => {
    //     return response.json();
    // })
    .then((data) => {
     return data
    });
}
