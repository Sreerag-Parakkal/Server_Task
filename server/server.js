const http = require("http");
const url = require("url");

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    const query = url.parse("http://localhost:4000/default.html?name='node'&Category='assignment'",true);
    console.log(query.host);
    console.log(query.pathname);
    console.log(query.search);
    res.end("welcome");
}).listen(4000);