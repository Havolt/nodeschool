const net = require('net');

const path = process.argv[2];

let server = net.createServer((socket)=>{
    //socket handling logic
    let data = '';

    function addZero(input){
        input = input += '';
        let inpArr = input.split('');
        if(inpArr.length == 1){
            return '0'+input;
        }else{
            return input;
        }
    }
    
    function makeTime(d){
        let date = new Date();
        d = date.getFullYear() + '-';
        let month = date.getMonth() + 1;
        month = addZero(month);
        d += month + '-';
        day = date.getDay() +1;
        day = addZero(day);
        d += day + ' ';
        let hour = date.getHours();
        hour = addZero(hour);
        d += hour + ':';
        let minutes= date.getMinutes();
        minutes = addZero(minutes);
        d += minutes + '\n';

        return d;
        
    }
    data = makeTime(data);

    socket.end(data);


});
server.listen(path);