const http = require("http");
const fs = require("fs");

const divy = fs.readFileSync("project.html");

const server = http.createServer((req,res)=>{
    res.writeHead(200,'Content-type','text/html');
    res.end(divy);
});

server.listen(80,'127.0.0.1',()=>{
    console.log(" This is server linsten port");
});