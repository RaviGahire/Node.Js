import fs from "node:fs"

//time 30ms
const writeStream = fs.createWriteStream("streamNumbers.txt")

console.time()
for(let i = 0 ; i <=5000 ; i++){
    writeStream.write(`${i}, `)
}

writeStream.end()

writeStream.on("finish", ()=>{
    console.log("finish")
    console.timeEnd()
})