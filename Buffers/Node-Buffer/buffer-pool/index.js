import {Buffer} from 'buffer'

const b1 = Buffer.alloc(4)
const b2 = Buffer.allocUnsafe(4)


console.log(b1.byteLength) // 4 byte
console.log(b2.byteLength) // 4 byte

console.log(b1.buffer.byteLength) // 4 byte
console.log(b2.buffer.byteLength) // 8192 byte
console.log(Buffer.poolSize) // 8192 byte

