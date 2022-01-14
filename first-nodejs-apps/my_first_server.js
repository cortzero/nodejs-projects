const http = require('http');
const myDate = require('./modules/my_date_module');
const url = require('url');

http.createServer(function(req, res) {
  // Writes the headers of the response
  res.writeHead(200, { 'Content-Type': 'application/json'});

  // Writes the body of the response
  res.write('Hello world\n\nThe current date is ' + myDate.currentDate() + '\n');
  res.write('The url this request came from is: ' + req.url + '\n\n');

  let q = url.parse(req.url, true) // Returns an URL object
  let qdata = q.query; // Returns an object with attributes as the query words in the URL
  console.log(qdata.year, qdata.month)

  // Writes a different text according to the portion of the url after the domain name
  if (req.url == '/') {
    res.write('Welcome to the main page');
  }
  else if (req.url == '/foo') {
    res.write('Foo page');
  }
  else if (req.url == '/bar') {
    res.write('Bar page');
  }
  else {
    res.write('404: Page not found');
  }
  res.end('\n\nGood night!\n');
}).listen(8000);