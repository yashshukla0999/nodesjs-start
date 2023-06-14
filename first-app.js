const http = require('http');
const server = http.createServer((req,res)=>{
const url = req.url;

 if(url==="/home"){
    res.write("Welcome to the home page");
    return res.end();

}
else if(url==="/about"){
    res.write("welcome to a about page");
    return  res.end();

}
else if(url==="/node"){
    res.write("welcome to a node js project");
    return res.end();
}

res.end();
})
server.listen(3000);
