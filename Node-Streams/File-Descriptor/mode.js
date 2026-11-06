import fs from "node:fs";

// Open file in write mode
const fd = fs.openSync("example.txt", "w");

fs.writeSync(fd, "Hello World!");

fs.closeSync(fd);

// If no mode is provided, it defaults to "r" (read-only).
// r = Read
// w = Write
// a = Append
// + = Read + Write
// x = Exclusive creation (fails if the file already exists).
