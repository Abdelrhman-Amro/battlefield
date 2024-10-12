// Modules used
const http = require('http');

// Glopal variables
const PORT = 3000;
const hostname = 'localhost';

// Creation of the server
const server = http.createServer((req, res) => {
  console.log(req.PORT);
  console.log(req.url);
  res.write('hello world');
  res.end();
});

// Server listen here
server.listen(PORT, hostname);
