import fs from "fs";

fs.open("./file.txt",(err,fd)=>{
    console.log(fd)
    if(!err===null){
        console.log(err)
    }
})

fs.open("./package.json",(err,fd)=>{
    console.log(fd)
        if(!err===null){
        console.log(err)
    }
})