'use strict';

const http = require('http'),
    fs = require('fs'),
    contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript'
    };

var server = http.createServer((request, response) => {

    var map = require('through2-map');
    if (request.method !== 'POST')
        response.end();
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);

}).listen(+process.argv[2]); 