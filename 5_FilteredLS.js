const fs = require('fs');

let path = process.argv[2].toString();
let fileType =  '.' + process.argv[3].toString()

fs.readdir(path, (err, list)=>{
    if(err){
        console.log(err)
    }else{
        //console.log(list);
        let reg = new RegExp(fileType, "g");
        for(let i = 0; i < list.length; i++){
            if(reg.test(list[i])){
                console.log(list[i]);
            }
        }
    }
})

/*
    console.log(path);
    console.log(fileType);
*/