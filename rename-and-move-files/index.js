import { rename } from "fs/promises";

// rename opration
// try {
//     // rename              (oldPath, newPath)
//     await rename("./old-name.txt", "./new-name.txt");
//     console.log("✅ File renamed successfully!");
// } catch (error) {
//     console.error("❌ Failed to rename:", error.message);
// }

//move opration
try {

    await rename(".//move//my-file", ".//new-folder//my-file")
    console.log("✅ File moved successfully!");

} catch (error) {
    console.error("❌ Failed to move:", error.message);
}