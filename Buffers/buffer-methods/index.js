import {Buffer} from 'buffer';
import { writeFile } from 'fs/promises';

// const buffer1 =  Buffer.from("Ravi Gahire" ,"utf-16le")

// const res = buffer1.toString("utf-8")

const buf = Buffer.alloc(8)

 buf.write("RaviGahire")

console.log( buf.toString())

