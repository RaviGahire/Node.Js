const http = require('http')
const Port = 3000
const host = '127.0.0.1'



const server = http.createServer((req,res)=>{

    res.end('hello ')

})
server.listen(Port,host,()=>{
    console.log(`Server runing on http://${host}:${Port}`)
})