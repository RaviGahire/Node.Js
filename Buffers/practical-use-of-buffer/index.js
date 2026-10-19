import {readFile} from "fs/promises"

const buffer  = await readFile('file.txt',"utf-8")

console.log(buffer)