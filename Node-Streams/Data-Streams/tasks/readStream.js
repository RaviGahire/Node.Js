import fs from "fs"

const readStream = fs.createReadStream("D:\\Movies\\vid-1.3gb.mkv",
    { highWaterMark: 6 * 1024 * 1024 })

readStream.pipe(process.stdout)