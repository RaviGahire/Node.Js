import http, { createServer } from "http"
import { writeFile } from "fs/promises";


const server = createServer((req,res)=>{
    req.on("data" ,(readBody)=>{
        console.log(readBody)
         writeFile ('file.txt',readBody)
    });

    res.setHeader("Content-Type","text/text ; charset='utf-8'");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end("Hello From Server");

})

server.listen(3000,()=>{
    console.log("Server runing on http://localhost:3000")
})