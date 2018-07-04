const http = require('http');
const app = require('./app');

http.createServer((req, res)=>{
    app.handleRequest(req, res);
}).listen(8000);