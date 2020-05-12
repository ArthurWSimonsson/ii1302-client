export const postsService = {
    getLog,
    getEntry,
    changeReadStatus,
    deleteEntry
};

const path=`https://ii1302-server.eu-gb.mybluemix.net/api/message/`

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

function getLog(){
    return fetch(`${path}all`)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        return data
    });
}

function getEntry(id){
    return fetch(`${path}${id}`)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        return data
    });
}

function changeReadStatus(id,message) {
    const requestOptions = header('PUT',message)
    return fetch(`${path}read/${id}`, requestOptions)
    .then((data) => {
     return data
    });
}

function deleteEntry(id) {
    const requestOptions = header('DELETE')
    return fetch(`${path}${id}`, requestOptions)
    .then((data) => {
     return data
    });
}