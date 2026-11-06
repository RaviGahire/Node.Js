import fs from "fs/promises"

const readFileHandler = await fs.open("D:\\Movies\\vid-1.3gb.mkv" , "r")
const writeFileHandler = await fs.open("myfile.mkv" ,"w")

const readStream = readFileHandler.createReadStream()
const writeStream = writeFileHandler.createWriteStream()

readStream.pipe(writeStream)



