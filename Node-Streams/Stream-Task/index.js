import fs from 'fs'

const vidBuff = fs.createReadStream("../Readeble-streams/video.mkv", 
    { highWaterMark: 1 * 1024 * 1024 });

//  Get the total size of the file first
const totalSize = fs.statSync("../Readeble-streams/video.mkv").size

let totalBytesRead = 0;
vidBuff.on("data", (chunk) => {
    totalBytesRead += chunk.byteLength
    const pers = (totalBytesRead / totalSize) * 100;
    console.log(pers.toFixed(2))
})

vidBuff.on("end", () => {
    console.log("end ")
})