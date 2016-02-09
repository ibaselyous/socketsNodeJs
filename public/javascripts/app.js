/**
 * Created by IhabBaselyous on 08.02.2016.
 */

var socket = io();
var $form = jQuery('#submit-form');
var $sentBox = $('#textarea');
var $receivedBox = $('#textarea2');

socket.on('connect', function() {
   console.log("client is connected");
});

socket.on('message', function(message) {
   console.log(message.text) ;
    $sentBox.val($sentBox.val() + "\n" +  message.text);

});

$form.on('submit', function (event) {
    event.preventDefault();
    var text = $form.find('input[name=message]').val();
    socket.emit('message' , {text :  text});
});