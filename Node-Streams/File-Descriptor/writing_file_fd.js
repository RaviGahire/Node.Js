import  fs from "fs"

const fd = fs.openSync("./write.txt" , "w") //we have to open in write mode 

const buff = new Buffer.from("string")

fs.write(fd,buff,(err,bytesWritten,dataWritten)=>{
    console.log(err)
    console.log(bytesWritten)
    console.log(dataWritten)
})