import fs from "fs"

const readStream = fs.createReadStream("D:\\Movies\\vid-2.5gb.mkv", { highWaterMark: 10 * 1024 * 1024 })

const writeStream = fs.createWriteStream("piping.mkv")

readStream.pipe(writeStream) // we can direclty pass as writeStream inside pipe method
// readStream.unpipe(writeStream)



setTimeout(()=>{
    readStream.unpipe(writeStream)
},8000)

// Two Events
writeStream.on("unpipe",()=>{
    console.log("Data unpipe")
})

writeStream.on("pipe",()=>{
    console.log("Data pipe")
})

// using backpressure
// readStream.on("data", (chunks) => {

//     const isEmpty = writeStream.write(chunks)

//     if (!isEmpty) {
//         readStream.pause()
//     }
// })

// writeStream.on("drain", () => {
//     readStream.resume()
// })