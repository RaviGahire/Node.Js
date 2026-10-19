import fs from 'fs/promises'

const a = await  fs.readFile("C:\\Users\\ravig\\Desktop\\a.mkv")
const b = await fs.readFile("C:\\Users\\ravig\\Desktop\\b.mkv")
const c = await  fs.readFile("C:\\Users\\ravig\\Desktop\\b.mkv")

console.log(a.byteLength)
console.log(b.byteLength)
console.log(c.byteLength)

console.log("end")