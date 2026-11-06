import fs from "fs"

const charBuff = fs.createReadStream("./chars.txt", { highWaterMark: 4 })

// let readCount = 0
charBuff.on("data", (chunks) => {
    // readCount++ readCount === 1
    if (charBuff.readableHighWaterMark === charBuff.bytesRead) {
        fs.writeFileSync("Chunks.txt", chunks)
    } else {
        fs.appendFileSync("Chunks.txt", chunks)
    }

    charBuff.pause()
    setTimeout(() => {
        charBuff.resume()
    }, 1000)
})

// Events

charBuff.on("pause" ,()=>{
    console.log("Stream Paused")
})

charBuff.on("resume" ,()=>{
    console.log("Stream resume")
})