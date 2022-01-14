const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

INDEX_PATH = './index.html';

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      const oldPath = files.path;
      const newPath = 'C:/User/Johan/Desktop/JavaScript/nodejs-projects/uploading_files' + files.originalFilename;
      fs.rename(oldPath, newPath, function (err) {
        if (err) throw err;
        res.write('File uploaded.');
        res.end();
      });
    });
  } else {
    fs.readFile(INDEX_PATH, function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
}).listen(8000);