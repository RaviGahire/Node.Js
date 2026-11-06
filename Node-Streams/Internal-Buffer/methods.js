import fs from "fs"

const readStream = fs.createReadStream('./chars.txt', { highWaterMark: 4 },);

// readStream.setEncoding("utf-8") 


readStream.on('data', (chunks) => {

console.log(chunks)

})


readStream.on("end",()=>{
    console.log("end Event")
})

readStream.on("close",()=>{
    console.log("Close Event")
})

readStream.destroy()
