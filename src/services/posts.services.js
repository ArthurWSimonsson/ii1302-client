export const postsService = {
    getLog,
    getEntry
};

function getLog(){
    return fetch('https://ii1302-server.eu-gb.mybluemix.net/api/message/all')
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        return data
    });
}

function getEntry(id){
    return fetch(`https://ii1302-server.eu-gb.mybluemix.net/api/message/${id}`)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        return data
    });
}