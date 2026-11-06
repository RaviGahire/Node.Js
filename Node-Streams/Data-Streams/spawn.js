import { spawn } from "child_process";

// run inside bash because of cat cmd is bash command
const childProcess = spawn("cat", ["./file.txt"]);

childProcess.stdout.on("data", (chunk) => {
    console.log(chunk.toString());
});



