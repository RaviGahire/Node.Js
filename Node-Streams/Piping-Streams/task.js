import fs from "fs"

const video = fs.createReadStream("D:\\Movies\\vid-2.5gb.mkv", { highWaterMark: 1 * 1024 * 1024 })

const writeStream = fs.createWriteStream("task.mkv")

video.on("data", (chunk) => {

    const isEmpty = writeStream.write(chunk) // return true and false 

    if (!isEmpty) {
        video.pause()
    }


})

writeStream.on("drain", () => {
    video.resume()
})

video.on("end", () => {
    console.log("Copied successfully")
})