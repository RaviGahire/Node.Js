import fs from "node:fs"

//time 700ms

// console.time()
// for (let i = 1; i <= 5000; i++) {
//     if (i === 1) {
//         fs.writeFile("num.txt", `${i}, `, (err) => {
//             if (i === 5000) {
//                 console.timeEnd()
//             }
//         })
//     } else {
//         fs.appendFile("num.txt", `${i}, `, (err) => {
//             if (i === 5000) {
//                 console.timeEnd()
//             }
//         })
//     }
// }

console.time()
for (let i = 1; i <= 5000; i++) {
    if (i === 1) {
        fs.writeFileSync("num.txt", `${i}, `)
    } else {
        fs.appendFileSync("num.txt", `${i}, `)
    }
}
console.timeEnd()
