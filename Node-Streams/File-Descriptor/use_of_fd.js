import fs from "fs";

const fd1 = fs.openSync("file.txt")
// console.log(fd1)

// fs.read(fd1, (err, bytesRead, buffData) => {
//     console.log(err)
//     console.log(bytesRead)
//     // console.log(buffData)
//     console.log(buffData.toString())
//     console.log(buffData.byteLength)
// })



const buff = Buffer.alloc(10)

fs.read(
    fd,
    {
        buffer: buff,
        offset: 0,
        length: 5,
        position: 10
    },
    (err, bytesRead, bufferData) => {
        if (err) throw err;

        console.log("Bytes read:", bytesRead);
        console.log("Buffer:", bufferData);
        console.log("Buffer size:", bufferData.byteLength);
    }
);