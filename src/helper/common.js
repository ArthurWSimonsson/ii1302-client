// "date": "2020-10-10 10:00:00"

export function formatDate() {
    var today = new Date();
    // var date2 = new Date().toISOString().getTimezoneOffset()*60*1000).substr(0, 19).replace('T', ' ');
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = date+' '+time;

    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localTime = (new Date(Date.now() - tzoffset)).toISOString().replace('T', ' ').substr(0, 19);

    // console.log('helper', (new Date()).getTimezoneOffset())
    // console.log('helper', (Date().now()))
    // console.log('helper2', dateTime)
    return localTime;
}

