'use strict';

const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript'
    };

var server = http.createServer((request, response) => {
    console.log('serving', request.url);

    const ext = path.extname(request.url);
    if (ext && contentType[ext]) {
        response.setHeader('Content-type', contentType[ext]);
    }
    response.setHeader('X-Powered-By', 'PCS');

    const rs = fs.createReadStream(process.argv[3], 'utf-8');

    rs.pipe(response);

    rs.on('error', err => {
        response.setHeader('Content-type', contentType['.html']);
        if (err.code === 'ENOENT') {
            response.statusCode = 404;
            response.write('No such page. Sorry.<br><h1>404</h1>');
        } else {
            response.statusCode = 500;
        }
        response.end(err.message);
        return;
    });

}).listen(+process.argv[2]); 