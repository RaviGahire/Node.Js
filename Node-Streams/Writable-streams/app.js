import fs from "fs"
import { appendFile } from "fs/promises"

// const writeStream  = fs.createWriteStream('./file.txt' ); // by default value is 16kb 16384 bytes

// console.log(writeStream.writableHighWaterMark)

//Write method work like appendFile method
// writeStream.write("ABC")
// writeStream.write("abc")
// writeStream.write("123")


// Benchmark of read stream
// Time : 3.3 seconds
// Memory : 45MB 
// CPU : 13%

// Benchmark of write stream
// Time : 1.7 seconds
// Memory : 700 MB 
// CPU : 18%

console.time()
const readStream = fs.createReadStream('./video.mkv', { highWaterMark: 1 * 1024 * 1024 })

const writeStream  = fs.createWriteStream('write.mkv' , {highWaterMark: 1 * 1024 * 1024} ); 

readStream.on("data", async (chunks) => {
//    await appendFile("myvideo.mkv", chunks)

writeStream.write(chunks) // This is wrong way we are using write stream there are on concept called as backpressur

})

readStream.on("end", () => {
    console.timeEnd()
})