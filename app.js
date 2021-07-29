const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Amaizi, am Felix from Kenya');
});

server.listen(port, hostname, () => {
  console.log(`The Local Server is running on:://${hostname}:${port}/`);
});
