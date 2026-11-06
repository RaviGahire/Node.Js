import fs, { openSync } from "fs"
const fd = openSync("write.txt", "w")

console.time()

for (let i = 0; i <= 100000; i++) {
    fs.writeSync(fd, `${i},`)
}
fs.closeSync(fd)

console.timeEnd()
