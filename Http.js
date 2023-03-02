const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello, Welcome');
    res.end();
})

server.listen(48);