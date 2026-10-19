const buffer  = require("buffer")

const buffer1 =  buffer.Buffer.alloc(4)
const buffer2 =  buffer.Buffer.allocUnsafe(10500)

console.log("Alloc",buffer1)
console.log("Unsafe Buffer",buffer1.toString())