const buffer = new ArrayBuffer(4)

// console.log(buffer)

const uint8array = new Uint8Array(buffer)

// Always remeber Uint8Array Store Numbers Only not an string
uint8array[0] = 65
uint8array[1] = 67
uint8array[2] = 68
uint8array[3] = 69

console.log(uint8array)

const url = "http://localhost:3000/"
fetch(url,{
    method:"POST",
    body:uint8array,
}).then(res => res.text()).then(data => console.log(data))
