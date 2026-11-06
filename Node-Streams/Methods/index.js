import fs from "fs";


const charBuff = fs.createReadStream("./chars.txt" , {highWaterMark:4,encoding:"utf-8"});

// charBuff.setEncoding("utf-8")
// charBuff.Destroy(error) /
// charBuff.setEncoding("utf-8")
// charBuff.setEncoding("utf-8")

charBuff.on("data", (chunk) => {
console.log(chunk)  

})

