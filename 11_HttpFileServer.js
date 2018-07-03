const http = require('http');
const fs = require('fs');

const path = process.argv[2];
const fileLoc = process.argv[3];

let server = http.createServer((req, res)=>{
    const statusCode = res.statusCode;

    let src = fs.createReadStream(fileLoc);

    src.pipe(res);
})

server.listen(path);