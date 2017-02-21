var http = require('http');
let dataString = '';
http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => { dataString += data; });
    response.on('error', (err) => { console.error(err); });
    response.on('end', () => {
        console.log(dataString.split('').length);
        console.log(dataString);
    });
});