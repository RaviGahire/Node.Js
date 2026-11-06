import fs from "fs/promises"


// r+ will keep extra data 
// w+ will erase all data and then write it 

const fileHandler = await fs.open("stream.txt" , "r+") 

const writeStream =  fileHandler.createWriteStream()

writeStream.write("Hello", (err)=>{

    console.log(err)
})


