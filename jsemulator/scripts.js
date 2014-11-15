var socket = io();

socket.on('yo', function(yo) {
  console.log(yo);

  $('#actions').prepend($('<li>' + yo.username + ' - ' + yo.btn + '</li>'));

  GameBoyKeyDown(yo.btn);
  setTimeout(function() {
    GameBoyKeyUp(yo.btn);
  }, 50);
});
