import { spawn } from "node:child_process";

const childApp = spawn("node" ,["child.js"]) // we can run 

childApp.stdout.on("data" ,(chunk)=>{
    console.log(chunk.toString())
})