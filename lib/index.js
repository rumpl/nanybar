var dgram = require('dgram');

module.exports = function (command, port) {
  var port = port || 1738;
  var host = '127.0.0.1';
  var message = new Buffer(command);

  var client = dgram.createSocket('udp4');
  client.send(message, 0, message.length, port, host, function(err, bytes) {
    client.close();
  });
}
