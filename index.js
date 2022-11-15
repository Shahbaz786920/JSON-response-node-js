const http = require('http');
const fs = require("fs");
const data = require('./file.json');
const url = require('url');
const server=http.createServer((req,res)=>{
    const parsedURL=url.parse(req.url,true)

    if(parsedURL.pathname==='/vegetables'&&req.method==='GET'){
        res.writeHead(200)
        res.end(JSON.stringify(data))
    }else{
        res.writeHead(404)
        res.end(JSON.stringify({msg:'data is not found'}))
    }
})
const text = fs.readFileSync("file.json","utf-8");
console.log(text); 

server.listen(8080,()=>console.log('server started ...'))

