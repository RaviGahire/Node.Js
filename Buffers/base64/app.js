import { readFile,writeFile } from "fs/promises";

const a = await readFile('./img/favicon.png', "base64")

// console.log(a)

await writeFile('new-file.txt', a )

await writeFile("a.png", a , "base64")