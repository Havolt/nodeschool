const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, (error, data)=>{
        if(error){
            res.writeHead(404);
            res.write('File Not Found');
        }else{
            res.write(data);
        }
        res.end();
    });
}).listen(8000)