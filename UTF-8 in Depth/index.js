
import fs from "fs/promises"

const buffer = await fs.readFile('./text.txt');

async function bufferToString(buffer) {

    let fileContent = " "

    await buffer.forEach(element => {

        fileContent += String.fromCharCode(element)
    });

    return fileContent
}

const res = await bufferToString(buffer)
console.log(res)