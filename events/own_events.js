const events = require('events');
const http = require('http');


// Creating the server
// The event 'connection' will be fired once a user enters the URL in a browser
server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Connected! Welcome sir.')
}).listen(8000);

const eventEmitter = new events.EventEmitter();

// Creating an event handler
const eventScreamHandler = function () {
  console.log("SOMEONE IS SCREAMING!!");
};  

const eventConnectedHandler = function () {
  console.log("Someone is connected!");
};  

// Assigning the event handler for 'scream' and 'connection' events
eventEmitter.on('scream', eventScreamHandler);
server.on('connection', eventConnectedHandler);

// Firing the event 'scream'
eventEmitter.emit('scream');

