const http = require('http');

let path = [];
let finalArr = [];

for(let i = 2; i < process.argv.length; i++){
    path.push(process.argv[i]);
}

for(let i = 0; i < path.length; i++){

    http.get(path[i], (res)=>{
        const statusCode = res.statusCode;
        const contentType = res.headers['content-type'];

        let curr = i;
        let allData = '';
        res.on('data', (chunk)=>{
            allData += chunk;
        })
        res.on('end', ()=>{
            finalArr[curr] = allData;
            if(finalArr.length == path.length){
                let checkFull = true;
                for(let j = 0; j < finalArr.length; j++){
                    if(finalArr[j] == undefined){checkFull = false;}
                }
                if(checkFull){
                    for(let j = 0; j < finalArr.length; j++){
                        console.log(finalArr[j]);
                    }
                }
            }
        })

    })

}
