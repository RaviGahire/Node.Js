
const res = await fetch("http://localhost:4000/")

// const data = await res.json() // for backend we have to send json file or json data
// const data = await res.text() // when we are sending plain text

const decoder = new TextDecoder()

for await(const chunk  of res.body){
  // console.log(chunk)
  console.log(decoder.decode(chunk))
}

console.log(data)