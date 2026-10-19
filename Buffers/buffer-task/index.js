const fs = require ("fs/promises")

const data = new Uint8Array(4)

data[0] = 0x52 //R
data[1] = 0x61 //a
data[2] = 0x76 //v
data[3] = 0x69 //i

const decoder = new TextDecoder('utf-8')
const res = decoder.decode(data)

console.log(res)
 
fs.writeFile("my-name.txt" , res)
