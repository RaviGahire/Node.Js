import fs from "fs"

const charBuff = fs.createReadStream("./chars.txt", { highWaterMark: 4 })

charBuff.on("data", (chunks) => {

   fs.appendFile("charChunks.txt", chunks.toString(), () => {

        if (chunks.toString().includes("MNOP")) {
            charBuff.pause()
            console.log("Is Paused", charBuff.isPaused())
            console.log("readable Flowing", charBuff.readableFlowing)
            console.log("readable Ended", charBuff.readableEnded)
        }
    })
})