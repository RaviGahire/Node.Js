// In js we write or represent the ocatal number with 0o12 like this format.
// do not exist digit above 7 like this 12458 it will throw the error

const octalNum = 0o1245

console.log(octalNum)

// how we convert any number into octal using js 
let num = parseInt(124578 , 8 )
console.log(num)

let num2 = 0o12345
num2.toString(8)
console.log(num2)