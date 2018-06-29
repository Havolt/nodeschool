const myModule = require('./module.js');

let path = process.argv[2].toString();
let fileType= process.argv[3].toString();

myModule(path, fileType, (err, data)=>{
    if(err){
        console.log(err)
    }else{
        for(let i = 0; i < data.length; i++){
            console.log(data[i]);
        }
    }
});

