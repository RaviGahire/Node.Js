import fs from "fs"


// by-deafult size 64 * 1024 
console.time() 
const readStream = fs.createReadStream("D:\\Movies\\vid-1.3gb.mkv",{highWaterMark: 100* 1024 * 1024})

const chunks = readStream.on("data" , (chunkBuff)=>{
    // console.log(chunkBuff)
    // console.log(chunkBuff.byteLength)

     fs.appendFile("myvideo.mkv" , chunkBuff ,()=>{
        if(chunkBuff.byteLength < 100 * 1024 * 1024) console.timeEnd()
     })

   

})

// console.log(chunks)