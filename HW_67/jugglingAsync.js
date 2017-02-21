var http = require('http');
let done = 0,
    dataString = [];
for (let i = 2; i < 5; i++) {
    http.get(process.argv[i], (response) => {
        dataString[i] = '';
        response.setEncoding('utf8');
        response.on('data', (data) => { dataString[i] += data; });
        response.on('error', (err) => { console.error(err); });
        response.on('end', () => {
            done++;
            if (done === 3) {
                dataString.forEach(function (data) {
                    console.log(data);
                });
            }
        });
    });
}





