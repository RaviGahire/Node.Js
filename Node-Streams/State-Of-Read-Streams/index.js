import fs from "fs";


const charBuff = fs.createReadStream("./chars.txt");

// Initial State
console.log(charBuff.readableFlowing)
console.log(charBuff.readableEnded)
console.log(charBuff.isPaused())
console.log("======================================================")

charBuff.on("data", (chunk) => {
    // console.log(chunk);
    // Flowing State
    console.log(charBuff.readableFlowing)
    console.log(charBuff.readableEnded)
    console.log(charBuff.isPaused())

})

// Paused State:
console.log("Paused State:")
// charBuff.pause()
console.log(charBuff.readableFlowing)
console.log(charBuff.readableEnded)
console.log(charBuff.isPaused())


charBuff.on("end", () => {
    console.log("Ended State")
    console.log(charBuff.readableFlowing) //bug
    console.log(charBuff.readableEnded)
    console.log(charBuff.isPaused())

})
