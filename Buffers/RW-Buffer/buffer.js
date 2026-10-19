const buffer = new ArrayBuffer(4)
const view = new DataView(buffer)

//      index , value   
view.setInt8(0, 11) // decimal number
view.setInt8(1, 0o1454575) //octal number
view.setInt8(2, 0b10101) // binary number
view.setInt8(3, 0x40) // hexa number

console.dir(view)

