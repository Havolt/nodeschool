const fs = require('fs');


let argz = process.argv;

let file = fs.readFileSync(argz[2].toString());

let file2 = file.toString();

file2 = file2.split('');

let count = 0;

for(let i = 0; i < file2.length; i++){
    if(file2[i]){
        if(file2[i] == '\n'){
            count++;
        }
    }
}

console.log(count);




