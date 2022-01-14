const http = require('http');
const fs = require('fs');

const HTML_PATH = './index.html';

http.createServer(function(req, res) {
  fs.readFile(HTML_PATH, function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080);