let http = require("http");

let url = require("url");

http.createServer(function(request, response){

    if (request.url != "/favicon.ico")
    {
        console.log(request.url);
        let query = url.parse(request.url, true);
        console.log(query);
        console.log(query.query.aid);
    }

    response.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});

    response.write("Hello, Nodejs");

    response.write("This is my first Nodejs program");
    
    response.end();
}).listen(8001);