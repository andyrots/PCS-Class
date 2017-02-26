'use strict';

const http = require('http'),
    url = require('url'),
    pages = {
        '/api/parsetime': function (query) {
            let parseTime = {
                hour: query.getHours(),
                minute: query.getMinutes(),
                second: query.getSeconds()
            };
            return JSON.stringify(parseTime);
        },
        '/api/unixtime': function (query) {
            let unixTime = {
                unixtime: query.getTime()
            };
            return JSON.stringify(unixTime);
        }

    };

var server = http.createServer((request, response) => {
    if (request.method !== 'GET')
        response.end();
    const theUrl = url.parse(request.url, true),
        page = pages[theUrl.pathname];
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if (page) {
        let ourTime = new Date(theUrl.query.iso);
        response.write(page(ourTime));
    } else {
        response.statusCode = 404;
        response.write('No such page. Sorry.<br><h1>404</h1>');
    }
    response.end();

}).listen(+process.argv[2]);