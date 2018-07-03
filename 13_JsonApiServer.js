const http = require('http');
const fs = require('fs');
const url = require('url');

const path = process.argv[2];


http.createServer((req, res)=>{

    let test = url.parse(req.url, true);

    let regx = new RegExp(/[0-9]{2}:|[0-9]{2}\./g);
    let regx2 = new RegExp(/[0-9]{4}|-[0-9]{2}/g);
    let myTime = test.query.iso;
    let timeString = myTime.match(regx);
    timeString.forEach((element, index) => {
        timeString[index] = element.slice(0, -1);
    });

    if(test.pathname == '/api/parsetime'){
        
        let myObj = {};
        myObj.hour = parseInt(timeString[0])+1;
        myObj.minute = parseInt(timeString[1]);
        myObj.second = parseInt(timeString[2]);

        res.write(JSON.stringify(myObj));
        res.end();        
    }else if(test.pathname == '/api/unixtime'){
        let timePass = myTime//.slice(0, -5);
        let unxDate = new Date(''+timePass);
        unxDate = unxDate.getTime();
        let dateObj = {};
        dateObj.unixtime = unxDate;
        res.write(JSON.stringify(dateObj));
        res.end(); 
    }

}).listen(path)