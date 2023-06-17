const fs = require('fs');
const requestHandler =(req,res)=>{
    const method = req.method;
    const url = req.url
    
if (url === '/') {

    fs.readFile("massage.txt", (data, err) => {
        if (err) {
            console.log(err);
        }
        res.write('<html><body><form action="/massage" method="POST"><input type="text"><button type="submit">send</button></form></body>');
       
        res.write(`<body>${data}</body`)

   
        return res.end();

    })
}
else if (url === '/massage' && method === 'POST') {
    const body=[];
    req.on("data", (chunk) => {
        body.push(chunk);

    });
    return req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const massage = parsedBody.split("=")[0];
        fs.writeFileSync("massage.txt", massage, (err) => {
            
        });
        res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();

    });

}


};
module.exports=requestHandler;

