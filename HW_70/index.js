(function () {
    'use strict';

    const socket = io(), // io.connect('localhost:80')
     messagesDiv = $('#messages');
    function bottom (){
        messagesDiv.scrollTop(messagesDiv[0].scrollHeight);
    }
    // listen for 'message' events from server
    socket.on('new', msg => {
        messagesDiv.append('<span>' + msg + ' has joined the chat' + '</span><br/>');
        bottom();
    });
   
    socket.on('message', msg => {
        messagesDiv.append('<span>' + msg.name + ' says: ' + msg.message + '</span><br/>');
        bottom();
    });
     socket.on('left', msg => {
        messagesDiv.append('<span>' + msg + ' has left the chat' + '</span><br/>');
        bottom();
    });

    const lgInput = $('#name'),
        lgDiv = $('#logIn'),
        messageDiv = $('#messageDiv');
    $('#logIn').submit(e => {
        e.preventDefault();
        socket.emit('name', lgInput.val());
        //     lgInput.val('');
        lgDiv.hide();
        messageDiv.show();
    });
    const messageInput = $('#message');
    $('#messageForm').submit(e => {
        e.preventDefault();
        socket.emit('message', messageInput.val());
        messageInput.val('');
    });
} ());