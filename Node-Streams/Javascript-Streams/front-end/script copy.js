const input = document.querySelector("input");

input.addEventListener("change", async () => {
  const file = input.files[0];
  // const str = await file.text()
  // console.log(str);

  // javascript stream
  const readStream = file.stream()
  // const reader = readStream.getReader()
  const decoder = new TextDecoder()

  // first method
  // const data1 = await reader.read()
  // const data2 = await reader.read()
  // const data3 = await reader.read()
  // const data4 = await reader.read()
  // const data5 = await reader.read()

  // console.log(decoder.decode(data1.value))
  // console.log(decoder.decode(data2.value))
  // console.log(decoder.decode(data3.value))
  // console.log(decoder.decode(data4.value))
  // console.log(decoder.decode(data5.value))

  // second method 
  // while (true) {
  //   const { done, value } = await reader.read()
  //   if (done) break;
  //   console.log("reading done", value)
  // }

  // Third method : while using this method we have to commit this code  const reader = readStream.getReader()

  for await (const chunks of readStream){
    console.log(chunks)
  }

});
