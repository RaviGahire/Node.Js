import {EventEmitter} from "events"

// This is class 
const emitter = new EventEmitter()

//we get one object

emitter.setMaxListeners(1)

// emitter.on('abc' , ()=>{
//     console.log('abc event fired')
// })

// emitter.on('abc' , ()=>{
//     console.log('abc event fired')
// })

emitter.once('abc',()=>{
    console.log('abc once')
})

emitter.emit('abc')
emitter.emit('abc')
emitter.emit('abc')