#!/usr/bin/env node
import { appendFile, readFile } from "fs/promises"

const args = process.argv.slice(2);

const sourcePath = args[0];
const destinationPath = args[1];

// check both path are passed..?
if (!sourcePath || !destinationPath) {
    console.error("Error: Missing arguments.");
    console.log("Usage: mycopy <source_file> <destination_path>");
    process.exit(1)
}

try {

    // reading file from source path
    const sourceBuffer = await readFile(sourcePath);

    if (!sourceBuffer) {
        console.log("File ready to copy....!")
        console.log("Error in file ready state..!")
    }

    // Copying file to the destination folder
    appendFile(destinationPath, sourceBuffer);
    console.log("File coped successfully....!");


} catch (error) {
    console.log(`Something went wrong........${error.message}`)
}






