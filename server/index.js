const http = require("http")

http.createServer((req,resp)=>{
 resp.writeHead(200,{'Content-Type':'application\json'});
 resp.write(JSON.stringify({name:"Nikhil",
 phone:"937058779",
 password:"1234",
 city:"kalyan",
 address:"tilaknagar shiv sena office near ulhasnagar 421001",
 pincode:"421001"}))
 resp.end()
}).listen(4000);