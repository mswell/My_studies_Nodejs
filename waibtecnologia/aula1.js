var http = require('http');

var server = http.createServer(function(request, reponse){
    reponse.writeHead(200, {"Content-Type": "text/html"});
    reponse.write("<h1>Hello world!</h1>");
    reponse.write("<br>");
    reponse.write("<br>");
    reponse.write("<h1>Primeira aula de nodejs</h1>");
    reponse.write("<br>");
    reponse.end();
});

server.listen(3000, function(){
    console.log('Servidor está rodando!')
});

