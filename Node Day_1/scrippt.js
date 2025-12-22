const a = 5
const b = 10



function sun(...x){

const sum = x.map(()=> (x[0] + x[1]))
return sum

}

let z = sun(a ,b)
console.log(z)