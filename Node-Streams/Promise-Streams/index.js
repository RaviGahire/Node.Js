import fs from "fs/promises"

// It returns a Promise that resolves to a FileHandle object.
// await waits until the file is successfully opened.
// Important: By default, the file is opened in read mode (r).

const fileHandler = await fs.open("stream.txt") 

// createReadStream() not retrun promise so no need await 
const readStream =  fileHandler.createReadStream()

// using on method we can access data 
// others method we can use on the read streams 

readStream.on("data" , (chunk)=>{
    console.log(chunk)
})

readStream.on("close", async () => {
  await fileHandler.close();
});