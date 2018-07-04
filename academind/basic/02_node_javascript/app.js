const http = require('http');
const mod = require('./module1.js');
const mod2 = require('./module2.js');

http.createServer((req, res)=>{
    mod2.myFunction();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(mod.str);
    res.end();
}).listen(8000);