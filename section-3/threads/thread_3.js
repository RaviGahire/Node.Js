console.log('thread three')

for( i = 0 ; i < 1000000000; i++){
    if(i % 4000000000 == 0){
        console.log(`Runing  thread three ${i}`)
    }
}
