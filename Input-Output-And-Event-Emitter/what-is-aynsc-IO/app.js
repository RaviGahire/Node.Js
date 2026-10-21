import asyncFs from "fs/promises"
import fs from "fs"


// This is example of async I/O Operation
const file1 = await asyncFs.readFile("./file.txt" , "utf-8");
// console.log(file1)

fs.readFile('./file.txt' , "utf-8" ,(err,data)=>{
    console.log(data)
})

//This is example of sync I/O operation.
const file2 = fs.readFileSync("./file.txt" , "utf-8")
// console.log(file2)