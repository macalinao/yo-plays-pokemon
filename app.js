var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
app.use('/emu', express.static(__dirname + '/jsemulator'));


app.get('/yo/:btn', function(req, res) {
  var send = req.query;
  send.btn = req.params.btn || 'unk';
  io.emit('yo', send);
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('listening on *:' + port);
});
