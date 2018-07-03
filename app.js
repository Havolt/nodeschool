const http = require('http');

let path = process.argv[2].toString();

let req = http.get(path, (res)=>{

    const  statusCode = res.statusCode;
    const contentType = res.headers['content-type'];

    res.setEncoding('utf8');

    let fullData;
    res.on('data', (chunk=>{
        console.log(chunk);
    }))
    res.on('end', ()=>{
        //console.log(fullData + '\n');
    })
    res.on('error', ()=>{
        console.log('Error');
    })

});


