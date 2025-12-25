
const fs  = require('fs')


 fs.writeFileSync('C:\\Users\\ravig\\OneDrive\\Desktop\\JavaScript\\Node.Js\\Node Day_3\\text-1.txt' , ' I am Ravi Gahire')

let text =  fs.readFileSync('C:\\Users\\ravig\\OneDrive\\Desktop\\JavaScript\\Node.Js\\Node Day_3\\text-1.txt' )

console.log(text.toString())

console.log(text)

const rename = fs.renameSync('C:\\Users\\ravig\\OneDrive\\Desktop\\JavaScript\\Node.Js\\Node Day_3\\text-1.txt',
    
    'C:\\Users\\ravig\\OneDrive\\Desktop\\JavaScript\\Node.Js\\Node Day_3\\info.txt')

console.log(rename)

