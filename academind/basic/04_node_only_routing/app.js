const url = require('url');
const fs = require('fs');

function renderHTML(path, res){
    fs.readFile(path, null, (err, data)=>{
        if(err){
            res.writeHead(404);
            res.write('404 Not Found');
        }else{
            res.write(data);
        }
        res.end();
    })
}

module.exports = {
    handleRequest: function(req, res){

        res.writeHead(200, {'Content-Type': 'text/html'});

        let path = url.parse(req.url).pathname;
        console.log(path);
        if(path == '/'){
            renderHTML('./index.html', res);
        }else if(path !== 'favicon.ico'){
            renderHTML('./'+path+'.html', res);
        }
    }
}
