import fs from "fs"

const charBuff = fs.createReadStream("./chars.txt", { highWaterMark: 4 })

charBuff.on("data", (chunks) => {

    fs.appendFileSync("Chunks.txt", chunks)
    charBuff.pause()
    setTimeout(() => {
        charBuff.resume()
    }, 500)
})