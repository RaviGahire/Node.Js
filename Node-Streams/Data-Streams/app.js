// console.log(process.stdin) readable stream
// console.log(process.stdout) writable stream
// console.log(process.stderr) writable srteam

// process.stdin.write("hello") 
// process.stdout.write("hello")

import fs from "fs"
const writeStream = fs.createWriteStream("file.txt")
process.stdin.on("data", (chunk) => {
    writeStream.write(chunk)
});