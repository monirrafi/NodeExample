const http = require("http");

const server = http.createServer((req,res)=>{
    res.statusCode =200

    if(req.url == "/home"){
        res.write("assalam\n");
        res.write("home");
       
    }else if(req.url == "/about"){
        res.write("assalam\n");
        res.write("about");
        
    }else{
        res.write("404 notfound\n");
        res.statusCode=404;
    }
 
    res.end();
});

server.listen(5000,()=>console.log("server run with port 5000"));