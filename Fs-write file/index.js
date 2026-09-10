// import fs from "fs/promises"
import { readFile, appendFile, writeFile } from "fs/promises"

//writeFile("file-name.txt","string-or-file-content/we can pass the buffer")
//appendFile("file-name.txt","string-or-file-content/we can pass the buffer")

//reading file
const contentBuffer = await readFile('./file.txt')
//wrting file
await appendFile("C:\\Users\\ravig\\OneDrive\\Desktop\\content.txt", contentBuffer)
//reading file
const reading = await readFile("C:\\Users\\ravig\\OneDrive\\Desktop\\content.txt", "utf-8")

console.log(reading)





