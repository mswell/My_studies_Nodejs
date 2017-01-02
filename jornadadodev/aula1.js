var http = require('http');

var server = http.createServer(function(request, reponse){
    reponse.writeHead(200, {"Content-Type": "text/html"});
    reponse.write("<h1>Hello world!</h1>");
    reponse.end();
});

server.listen(3000, function(){
    console.log('Servidor esta rodando!')
});

