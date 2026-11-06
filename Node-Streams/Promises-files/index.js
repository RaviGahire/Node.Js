import fs from "fs/promises"

const fileHandler  = await fs.open("text.txt" ,"w+") 

//File Read Operation 
let { buffer:readBuff , bytesRead } = await fileHandler.read({buffer: Buffer.alloc(10)})

console.log(readBuff,bytesRead)

// File write Operation
const str = "hello"

let {buffer:writeBuff, bytesWritten } = await fileHandler.write(str) // we can write buffer here 

console.log(writeBuff, bytesWritten)