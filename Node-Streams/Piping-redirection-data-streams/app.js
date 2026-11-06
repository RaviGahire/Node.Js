
process.stdin.setEncoding("utf-8")

// process.stdin.on("data" ,(chunk)=>{
//     console.log(chunk)
// })

process.stdin.on("data" ,(chunk)=>{
    process.stdout.write(chunk)
})