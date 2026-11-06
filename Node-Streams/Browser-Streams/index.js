import http, { Server } from "http"
import fs from "fs/promises"

const server = http.createServer(async (req, res) => {
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("Content-Type", "text/txt"); // Here we can set our file format video imaage json 
    // res.setHeader("Content-Type", "image/webp");
    // res.setHeader("Content-Type", "video/mp4"); 

    const readFileHandler = await fs.open("./alpha.txt", "r")

    const readStream = readFileHandler.createReadStream({ highWaterMark: 1 })

    readStream.on("data", (chunks) => {

        res.write(chunks)

        readStream.pause()

        setTimeout(() => {
            readStream.resume()
        }, 1000)
    });

})

server.listen(4000, "localhost", () => {
    console.log("Srever stared")
})