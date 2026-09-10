import fs from "fs/promises"

// user file path
let file = process.argv[2]

//user word input
let wordInput = process.argv[3]

// console.log(wordInput)

// read file
const fileData = await fs.readFile(file, "utf-8");

//break word using regex
const wordsArray = fileData.split(/[\W]/).filter((w) => w)

// console.log(wordsArray)

let wordCount = {}

wordsArray.forEach((word) => {
    if (word in wordCount) {
        wordCount[word] += 1
    } else {
        wordCount[word] = 1
    }
});

const result = Object.entries(wordCount).find((w)=>w.includes(wordInput)) || "invalid Input";

console.log(result)
