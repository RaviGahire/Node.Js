import fs from "fs"
import { spawn } from "child_process"

const childProcess = spawn("node", ["./readStream.js"])

const writeStream = fs.createWriteStream("./video/myvid.mkv")

childProcess.stdout.on("data", (chunk) => {
    writeStream.write(chunk)
})

childProcess.stdout.pipe(writeStream)
