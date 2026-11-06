import fs from 'fs'

const writeStream = fs.createWriteStream('file.txt', { highWaterMark: 4 });

writeStream.write("A")
writeStream.write("B")
writeStream.write("C")
writeStream.write("D")
writeStream.write("E")

writeStream.end()

writeStream.on("finish", () => {
    console.log("finished")
})

writeStream.on("close", () => {
    console.log("closed")
})