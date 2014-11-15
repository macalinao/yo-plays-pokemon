var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + 'public'));

app.get('/yo_cb', function(req, res) {
  io.emit('yo', req.query);
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('listening on *:' + port);
});
