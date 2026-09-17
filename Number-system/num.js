
const arr = [2, 4, 6, 5]
// output = 5642

//5 * 1000 = 5000
// let multi = []
// for (let i = 0; i < arr.length; i++) {

//     if (i === 3) {
//         multi.push(arr[i] * 1000)
//     }
//     if (i === 2) {
//         multi.push(arr[i] * 100)    
//     }
//     if (i === 1) {
//         multi.push(arr[i] * 10)
//     }
//     if (i === 0) {
//         multi.push(arr[i] * 1)
//     }
// }

const res = arr.reduce((ac, cu, index) => ac + cu * 10 ** index)
// console.log(res)


function digitToNumber(digits) {
    let num = 0;
    digits.forEach((digit, index) => num += digit * Math.pow(10, index));
    return num
}
console.log(digitToNumber(arr))