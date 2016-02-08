/**
 * Created by IhabBaselyous on 08.02.2016.
 */

var socket = io();
socket.on('connect', function() {
   console.log("client is connected");
});

socket.on('message', function(message) {
   console.log(message.text) ;
});



