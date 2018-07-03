const fs = require('fs');

let path = process.argv[2].toString();

fs.readFile(path, (err, data)=>{
    if(err){
        console.log(err)
    }else{
        let counter = 0;
        let file = data.toString();
        file = file.split('');
        for(let i = 0; i < file.length; i++){
            if(file[i] == '\n'){
                counter++;
            }
        }
        console.log(counter);
    }
})