export const postsService = {
    getLog,
    getEntry,
    changeReadStatus,
    deleteEntry
};

const path=`https://ii1302-server.eu-gb.mybluemix.net/api/message/`

/**
 * @author Botan Cosar
 * @description returns an appropriate header for the service that is requested.
 * 
 * @param {*} method the method of the service.
 * @param {*} message optional parameter for data to send.
 */
function header(method,message=null){
    const requestOptions = {
        method: `${method}`,    
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: message!=null ? JSON.stringify(message):null
    };
    return requestOptions;
}

/**
 * @author Botan Cosar
 * @description returns the complete log of messages that has been posted to the database.
 */
function getLog(){
    return fetch(`${path}all`)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        return data
    });
}

/**
 * @author Botan Cosar
 * @description returns a single specific entry based on the specified entry.
 * 
 * @param {*} id the id of the entry.
 */
function getEntry(id){
    return fetch(`${path}${id}`)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        return data
    });
}

/**
 * @author Botan Cosar
 * @description marks posts that have already been read as "read" in the database.
 * 
 * @param {*} id the id of the entry.
 * @param {*} message carries the data that performs the operation.
 */
function changeReadStatus(id,message) {
    const requestOptions = header('PUT',message)
    return fetch(`${path}read/${id}`, requestOptions)
    .then((data) => {
     return data
    });
}

/**
 * @author Botan Cosar
 * @description deletes an entry from the database.
 * 
 * @param {*} id the id of the entry.
 */
function deleteEntry(id) {
    const requestOptions = header('DELETE')
    return fetch(`${path}${id}`, requestOptions)
    .then((data) => {
     return data
    });
}