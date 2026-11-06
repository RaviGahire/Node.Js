import fs from "fs"


const readStream = fs.createReadStream('./chars.txt', { highWaterMark: 4 },);

// pass number is optional in read method.
// console.log(readStream.read(5));

readStream.on('data', (chunks) => {

    // console.log(chunks)

})

// readable event 

readStream.on('readable', () => {
    // read method can contorl the data bytes how much bytes we want to read so we have to pass number
    // If we not pass any number in side a read method that time read method read all the bytes in this case its 4 bytes
    // if we pass 1 byte so it will read one byte and stor reaminin 3 byets 
    console.log(readStream.readableLength)
    console.log(readStream.read(1));
    console.log(readStream.readableLength)
})

