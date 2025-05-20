// Create web server

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const comments = [
  { id: 1, user: 'Alice', comment: 'Ótimo post!' },
  { id: 2, user: 'Bob', comment: 'Muito interessante.' }
];

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
