let http = require("http");

http.createServer(function(request, response){

    response.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});

    response.write("Hello, Nodejs");

    response.write("This is my first Nodejs program");
    
    response.end();
}).listen(8001);