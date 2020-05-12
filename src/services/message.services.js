export const messageService = {
    getWelcome,
    leaveMessage,
    changeWelcome
};

// const myHeaders = new Headers({
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json"
//   });
// {headers: myHeaders}

//   https://ii1302-server.eu-gb.mybluemix.net/api/message/welcome
//   https://ii1302-door-com.eu-gb.mybluemix.net/api/message/welcome

function getWelcome() {
    return fetch('https://ii1302-server.eu-gb.mybluemix.net/api/message/welcome')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
     return data
    });
}

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
