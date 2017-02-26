'use strict';

const net = require('net'),
    server = net.createServer(function (socket) {
        const now = new Date();
        socket.write(now.getFullYear() + '-');
        socket.write(addZero(now.getMonth() + 1) + '-');
        socket.write(addZero(now.getDate()) + ' ');
        socket.write(addZero(now.getHours()) + ':');
        socket.write(addZero(now.getMinutes()));
        socket.end('\n');
    }).listen(+process.argv[2]);

function addZero(x) {
    if (x < 10)
        return '0' + x.toString();
    return x.toString();
}