// We can import them using 2 type of import
// import fs from "fs"

// import fs from "node:fs"
//                              File path   File format/char encoding            
// const file = fs.readFileSync('./text.txt', 'utf-8')

// console.log(file)

//                              File path, encoding, callback            
// const file = fs.readFile('./text.txt',  (error, data) => {
//     let content = data.toString();
//     console.log(content)
    
//  })

//  console.log("end")

import fs from "fs/promises"

let count = 0 
setInterval(()=>{
console.log(count++)

},5)

const content = await fs.readFile("./text.txt")
const data = content.toString()
console.log("File reading done")

console.log("End")