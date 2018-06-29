const fs = require('fs');

module.exports = fList;;


function fList(dirname, filename, cb){
    
    fs.readdir(dirname, (err, data)=>{
        if(err){
            cb(err);
        }else{
            let preRex = '.'+filename
            let rex = new RegExp(preRex, "g");
            let arr = [];
            for(let i = 0; i < data.length; i++){
                if(rex.test(data[i])){
                    arr.push(data[i]);
                }
            }
            cb(err, arr)
        }
    })

    

}