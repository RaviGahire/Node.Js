import fs from "fs/promises"

console.time()
// const buff = await fs.readFile('./chars.txt')
const buff = await fs.readFile("D:\\Movies\\vid-1.3gb.mkv")

await fs.writeFile("video.mkv", buff)

console.log(buff.byteLength)

console.timeEnd()