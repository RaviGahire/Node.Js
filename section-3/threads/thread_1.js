console.log('stared thread one')

for( i = 0 ; i < 1000000000; i++){
    if(i % 4000000000 == 0){
        console.log(`Runing thread one: ${i}`)
    }
}
