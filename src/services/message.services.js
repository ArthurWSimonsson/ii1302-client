export const messageService = {
    getWelcome,
    leaveMessage,
    changeWelcome
};

/* Author Arthur Simonsson. */

/* Services (async calls) to send requests to the express server and fetch relevant information. */

/* Gets the main message */
function getWelcome() {
    return fetch('https://ii1302-server.eu-gb.mybluemix.net/api/message/welcome')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
     return data
    });
}

/* Changes main message */
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
    // console.log('service', requestOptions)

    return fetch(`https://ii1302-server.eu-gb.mybluemix.net/api/message/welcome`, requestOptions)
    // .then((response) => {
    //     console.log('json', response)
    //     return JSON.parse(response) //response.json();
    // })
    .then((data) => {
     return data
    });
}

/* Leaves a message to the officer holder */
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