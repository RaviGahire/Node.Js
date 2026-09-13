
import {writeFile} from "fs/promises";



setInterval( ()=>{
 writeFile("./watch.txt", new Date().toLocaleTimeString() )
},500)