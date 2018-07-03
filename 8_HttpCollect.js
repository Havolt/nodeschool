const http = require('http');

let path = process.argv[2];

http.get(path, (res)=>{

    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];

    let allData = '';
    res.on('data', (chunk)=>{
        allData += chunk;
    })

    res.on('end', ()=>{
        console.log(allData.length);
        console.log(allData);
    })

})

