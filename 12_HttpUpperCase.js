const http = require('http');
const map = require('through2-map');


const path = process.argv[2];

let server = http.createServer((req, res)=>{
    if(req.method == 'POST'){

        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);
        
        /*
        let data = '';
        req.on('data', (chunk)=>{
            data += chunk;
        })
        req.on('end', ()=>{
            console.log(data);
        })

        let data2 = data.pipe(map(function (chunk) {
            return chunk.toString().split('').reverse().join('')
        })).pipe(res)
        //console.log(map);
        */

    }
})

server.listen(path);