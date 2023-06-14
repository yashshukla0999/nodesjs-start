const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const method = req.method;
    const url = req.url
        if(url==='/'){
   
            fs.readFile("massage.txt",(err,data)=>{
                if(err){
                    console.log(err);
                }
                            res.write('<html><body><form action="/massage" method="POST"><input type="text"><button type="submit">send</button></form></body>');
res.write("<html>")
                res.write(`<body>${data}</body`)
           
                res.write('<html><body><form action="/massage" method="POST"><input type="text"><button type="submit">send</button></form></body>');
                res.write("</html>")
            return res.end();
    
        }) 
        }
       else  if(url==='/massage'&& method==='POST'){
        res.on("data",(chunk)=>{
            body.push(chunk);

        });
        return req.on("end",()=>{
            const parsedBody =buffer.concat(body).toString();
            const massage =parsedBody.split("=")[1];
            fs.writeFileSync("massage.txt",massage,(err)=>{
                res.statusCode=302;
                res.setHeader("Location","/");
                return res.end();
            });
           
        });
           
        }
       
       

});
server.listen(3000);