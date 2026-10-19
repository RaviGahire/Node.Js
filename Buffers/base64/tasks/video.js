import { readFile, writeFile } from "fs/promises"

const video = await  readFile("./video/gemini.mp4" , "base64" );
// console.log(video)

 await writeFile("video.txt" , video )
//  await writeFile("vid.mp4" , video , "base64")

export {video}
