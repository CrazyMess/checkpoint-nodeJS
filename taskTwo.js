const http = require("http");

http.createServer( (req,res) =>{
    res.writeHead(200,{'content-type': 'text/html'});

    res.end('<h1>Hello Node!!!</h1>\n');
}).listen(3000);

console.log("server is running on http://localhost:3000");